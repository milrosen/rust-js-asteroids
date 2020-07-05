mod utils;

use rand::Rng;
use std::ops::*;
use wasm_bindgen::prelude::*;
use web_sys::CanvasRenderingContext2d;

const DAMPING: f64 = 0.97;
const TURN_AMMOUNT: f64 = 0.1;
const BOOST_FORCE: f64 = 0.5;
const PI: f64 = std::f64::consts::PI;
const SHIP_RADIUS: f64 = 24.0;
const ASTEROID_VEL_MAG: f64 = 5.0;
const ASTEROID_MIN_SIZE: f64 = 25.0;
const SHOOT_DELAY: u32 = 10;
const BULLET_VEL_MAG: f64 = 25.0;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Copy, Clone)]
pub struct Vector {
	pub x: f64,
	pub y: f64,
}

impl Vector {
	pub fn from_polar(mag: f64, dir: f64) -> Vector {
		Vector {
			x: mag * dir.cos(),
			y: mag * dir.sin(),
		}
	}

	pub fn dist_sqr(&self, other_vector: Vector) -> f64 {
		(self.x - other_vector.x) * (self.x - other_vector.x)
			+ (self.y - other_vector.y) * (self.y - other_vector.y)
	}

	const ZERO: Vector = Vector { x: 0.0, y: 0.0 };
}

impl MulAssign<f64> for Vector {
	fn mul_assign(&mut self, other: f64) {
		self.x *= other;
		self.y *= other;
	}
}

impl AddAssign<Vector> for Vector {
	fn add_assign(&mut self, other: Vector) {
		self.x += other.x;
		self.y += other.y;
	}
}

impl Mul<f64> for Vector {
	type Output = Vector;
	fn mul(self, other: f64) -> Vector {
		Vector {
			x: self.x * other,
			y: self.y * other,
		}
	}
}

pub struct Asteroid {
	pub loc: Vector,
	pub vel: Vector,
	pub size: f64,
	pub shape: Vec<f64>,
}

impl Asteroid {
	pub fn new(screen_width: f64, screen_height: f64) -> Asteroid {
		let mut rng = rand::thread_rng();
		let size = rng.gen_range(25.0, 50.0);
		let shape = [0.0; 10]
			.iter()
			.map(|vert| vert + rng.gen_range(0.75, 1.5))
			.collect();

		Asteroid {
			loc: Vector {
				x: rng.gen_range(0.0, screen_width),
				y: rng.gen_range(0.0, screen_height),
			},
			vel: Vector::from_polar(ASTEROID_VEL_MAG, rng.gen_range(0.0, PI * 2.0)),
			size: size,
			shape: shape,
		}
	}

	pub fn from_loc_and_size(loc: Vector, size: f64) -> Asteroid {
		let mut rng = rand::thread_rng();
		let shape = [0.0; 10]
			.iter()
			.map(|vert| vert + rng.gen_range(0.75, 1.5))
			.collect();

		Asteroid {
			loc: loc,
			vel: Vector::from_polar(ASTEROID_VEL_MAG, rng.gen_range(0.0, PI * 2.0)),
			size: size,
			shape: shape,
		}
	}

	pub fn render(&self, ctx: &CanvasRenderingContext2d) {
		ctx.save();
		ctx.set_stroke_style(&JsValue::from("#ffffff"));
		ctx.translate(self.loc.x, self.loc.y).unwrap();
		ctx.begin_path();

		ctx.move_to(self.shape[0] * self.size, 0.0);
		for (i, vert) in self.shape.iter().enumerate() {
			let vertex = Vector::from_polar(
				*vert * self.size,
				PI * 2.0 * i as f64 / self.shape.len() as f64,
			);
			ctx.line_to(vertex.x, vertex.y);
		}

		ctx.close_path();
		ctx.stroke();
		ctx.restore();
	}

	pub fn update(&mut self, screen_width: f64, screen_height: f64) {
		self.loc += self.vel;

		// handle screen wrapping behavior
		if self.loc.x > screen_width + self.size {
			self.loc.x = 0.0 - self.size
		}
		if self.loc.x < 0.0 - self.size {
			self.loc.x = screen_width + self.size
		}
		if self.loc.y > screen_height + self.size {
			self.loc.y = 0.0 - self.size
		}
		if self.loc.y < 0.0 - self.size {
			self.loc.y = screen_height + self.size
		}
	}

	pub fn check_collision(&self, other_loc: Vector, other_radius: f64) -> bool {
		self.loc.dist_sqr(other_loc) < (self.size + other_radius) * (self.size + other_radius)
	}

	pub fn split(&self) -> Option<(Asteroid, Asteroid)> {
		if self.size < ASTEROID_MIN_SIZE {
			None
		} else {
			Some((
				Asteroid::from_loc_and_size(self.loc, self.size / 2.0),
				Asteroid::from_loc_and_size(self.loc, self.size / 2.0),
			))
		}
	}
}

pub struct Bullet {
	loc: Vector,
	vel: Vector,
}

impl Bullet {
	pub fn update(&mut self) {
		self.loc += self.vel;
	}

	pub fn render(&self, ctx: &CanvasRenderingContext2d) {
		ctx.save();
		ctx.set_stroke_style(&JsValue::from("#ffffff"));
		ctx.begin_path();
		ctx.move_to(self.loc.x, self.loc.y);
		ctx.line_to(self.loc.x + self.vel.x, self.loc.y + self.vel.y);
		ctx.stroke();
		ctx.restore();
	}
}

pub struct Explosion {
	pub loc: Vector,
	pub time: u32,
	pub shape: Vec<f64>,
}

impl Explosion {
	pub fn new(loc: Vector) -> Explosion {
		let mut rng = rand::thread_rng();
		let shape = [0.0; 6]
			.iter()
			.map(|vert| vert + rng.gen_range(0.0, PI / 3.0))
			.collect();

		Explosion {
			loc: loc,
			time: 0,
			shape: shape,
		}
	}
	pub fn update(&mut self) {
		self.time += 1;
	}
	pub fn render(&self, ctx: &CanvasRenderingContext2d) {
		ctx.save();
		ctx.set_stroke_style(&JsValue::from("#ffffff"));
		ctx.translate(self.loc.x, self.loc.y).unwrap();
		ctx.begin_path();

		// ctx.move_to(4.0, 0.0);
		// ctx.line_to(self.shape[0] + (self.time as f64) * 4.0, 0.0);
		for (i, vert) in self.shape.iter().enumerate() {
			let vertex = Vector::from_polar(
				*vert + self.time as f64 * 3.5,
				PI * 2.0 * i as f64 / self.shape.len() as f64 + vert,
			);
			let vertex2 = Vector::from_polar(
				*vert + (self.time as f64) * 4.0,
				PI * 2.0 * i as f64 / self.shape.len() as f64 + vert,
			);
			ctx.move_to(vertex.x, vertex.y);
			ctx.line_to(vertex2.x, vertex2.y);
		}

		ctx.close_path();
		ctx.stroke();
		ctx.restore();
	}
}

#[wasm_bindgen]
pub struct Movement {
	pub left: bool,
	pub right: bool,
	pub boost: bool,
	pub shoot: bool,
}

#[wasm_bindgen]
impl Movement {
	#[wasm_bindgen(constructor)]
	pub fn new() -> Movement {
		Movement {
			left: false,
			right: false,
			boost: false,
			shoot: false,
		}
	}
}

#[derive(Copy, Clone)]
pub struct Ship {
	pub loc: Vector,
	pub dir: f64,
	pub acc: Vector,
	pub vel: Vector,
	pub invulnerable_frames: u32,
	pub shoot_delay: u32,
}

impl Ship {
	pub fn update(&mut self, movement: &Movement, screen_width: f64, screen_height: f64) {
		if self.invulnerable_frames != 0 {
			self.invulnerable_frames -= 1
		}
		if self.shoot_delay != 0 {
			self.shoot_delay -= 1
		}

		if movement.left {
			self.dir -= TURN_AMMOUNT;
		}

		if movement.right {
			self.dir += TURN_AMMOUNT;
		}

		if movement.boost {
			self.acc = Vector::from_polar(BOOST_FORCE, self.dir);
		} else {
			self.acc = Vector::ZERO;
		}

		self.vel += self.acc;
		self.vel *= DAMPING;
		self.loc += self.vel;

		// handle screen wrapping behavior
		if self.loc.x > screen_width + SHIP_RADIUS {
			self.loc.x = 0.0 - SHIP_RADIUS
		}
		if self.loc.x < 0.0 - SHIP_RADIUS {
			self.loc.x = screen_width + SHIP_RADIUS
		}
		if self.loc.y > screen_height + SHIP_RADIUS {
			self.loc.y = 0.0 - SHIP_RADIUS
		}
		if self.loc.y < 0.0 - SHIP_RADIUS {
			self.loc.y = screen_height + SHIP_RADIUS
		}
	}

	pub fn render(&self, ctx: &CanvasRenderingContext2d, is_boosting: bool) {
		ctx.save();
		if self.invulnerable_frames == 0 {
			ctx.set_stroke_style(&JsValue::from("#ffffff"));
		} else {
			ctx.set_stroke_style(&JsValue::from("rgba(255, 255, 255, .5)"))
		}
		ctx.translate(self.loc.x, self.loc.y).unwrap();
		ctx.rotate(self.dir - PI / 2.0).unwrap();
		ctx.begin_path();
		ctx.move_to(-18.0, -24.0);
		ctx.line_to(0.0, 24.0);
		ctx.line_to(18.0, -24.0);
		ctx.line_to(0.0, -18.0);
		ctx.close_path();
		if is_boosting {
			ctx.move_to(9.0, -22.0);
			ctx.line_to(0.0, -30.0);
			ctx.line_to(-9.0, -22.0);
			ctx.move_to(0.0, -22.0);
		}
		ctx.stroke();
		ctx.restore();
	}
}

#[wasm_bindgen]
pub struct Game {
	pub width: f64,
	pub height: f64,
	asteroids: Vec<Asteroid>,
	bullets: Vec<Bullet>,
	explosions: Vec<Explosion>,
	pub score: i32,
	pub lives: i32,
	ship: Ship,
	pub is_boosting: bool,
}

#[wasm_bindgen]
impl Game {
	#[wasm_bindgen(constructor)]
	pub fn new(screen_width: f64, screen_height: f64) -> Game {
		let mut asteroids = Vec::new();

		for _ in 0..10 {
			asteroids.push(Asteroid::new(screen_width, screen_height));
		}

		Game {
			width: screen_width,
			height: screen_height,
			asteroids: asteroids,
			bullets: Vec::new(),
			explosions: Vec::new(),
			score: 0,
			lives: 3,
			ship: Ship {
				loc: Vector {
					x: screen_width / 2.0,
					y: screen_height / 2.0,
				},
				dir: 0.0,
				acc: Vector { x: 0.0, y: 0.0 },
				vel: Vector { x: 0.0, y: 0.0 },
				invulnerable_frames: 90,
				shoot_delay: 0,
			},
			is_boosting: false,
		}
	}

	pub fn update(&mut self, movement: &Movement) {
		if movement.boost {
			self.is_boosting = true
		} else {
			self.is_boosting = false
		}
		if self.ship.shoot_delay == 0 && self.ship.invulnerable_frames == 0 && movement.shoot {
			self.bullets.push(Bullet {
				loc: self.ship.loc,
				vel: Vector::from_polar(BULLET_VEL_MAG, self.ship.dir),
			});
			self.ship.shoot_delay = SHOOT_DELAY;
		}

		self.ship.update(movement, self.width, self.height);

		let mut new_asteroids = Vec::new();
		let mut remove_asteroid_index: i32 = -1;
		let mut remove_bullet_index: i32 = -1;
		let mut remove_explosion_index: i32 = -1;

		for asteroid in (&mut self.asteroids).iter_mut() {
			asteroid.update(self.width, self.height);
			if self.ship.invulnerable_frames == 0
				&& asteroid.check_collision(self.ship.loc, SHIP_RADIUS)
			{
				self.ship.invulnerable_frames = 90;
				self.lives -= 1;
				if self.lives <= 0 {
					self.explosions.push(Explosion::new(self.ship.loc));
					self.score = 0;
					self.ship.loc = Vector {
						x: self.width / 2.0,
						y: self.height / 2.0,
					};
					self.lives = 3;
				}
			}
		}

		for (j, bullet) in &mut self.bullets.iter_mut().enumerate() {
			bullet.update();
			for (i, asteroid) in &mut self.asteroids.iter().enumerate() {
				if asteroid.check_collision(bullet.loc, 5.0) {
					match asteroid.split() {
						Some((asteroid1, asteroid2)) => {
							new_asteroids.push(asteroid1);
							new_asteroids.push(asteroid2);
						}
						None => {
							self.explosions.push(Explosion::new(asteroid.loc));
						},
					};
					self.score += 5;
					remove_asteroid_index = i as i32;
					remove_bullet_index = j as i32;
				}
			}
			if bullet.loc.x < 0.0
				|| bullet.loc.x > self.width
				|| bullet.loc.y < 0.0
				|| bullet.loc.y > self.height
			{
				remove_bullet_index = j as i32;
			}
		}

		for (i, explosion) in self.explosions.iter_mut().enumerate() {
			explosion.time += 1;
			if explosion.time >= 15 {
				remove_explosion_index = i as i32;
			}
		}

		if 10 - self.asteroids.len() as i32 >= 0 {
			new_asteroids.push(Asteroid::from_loc_and_size(
				Vector {
					x: self.width,
					y: self.height,
				},
				80.0,
			))
		}

		for asteroid in new_asteroids {
			self.asteroids.push(asteroid);
		}

		if remove_asteroid_index != -1 {
			self.asteroids.remove(remove_asteroid_index as usize);
		}
		if remove_bullet_index != -1 {
			self.bullets.remove(remove_bullet_index as usize);
		}
		if remove_explosion_index != -1 {
			self.explosions.remove(remove_explosion_index as usize);
		}
	}

	pub fn render(&self, ctx: &CanvasRenderingContext2d) {
		ctx.save();

		ctx.set_fill_style(&JsValue::from("#0"));
		ctx.fill_rect(0.0, 0.0, self.width, self.height);

		self.ship.render(ctx, self.is_boosting);

		for asteroid in &self.asteroids {
			asteroid.render(ctx);
		}

		for bullet in &self.bullets {
			bullet.render(ctx);
		}

		for explosion in &self.explosions {
			explosion.render(ctx);
		}

		ctx.set_fill_style(&JsValue::from("#ffffff"));
		ctx.set_font("50px \"Hyperspace\"");
		ctx.fill_text(&format!("Lives: {}", self.lives), 30.0, 60.0)
			.unwrap();

		let score_text = &format!("Score: {}", self.score);
		let sc_text_width = ctx.measure_text(score_text).unwrap().width();
		ctx.fill_text(score_text, self.width - sc_text_width - 30.0, 60.0)
			.unwrap();

		ctx.restore();
	}
}
