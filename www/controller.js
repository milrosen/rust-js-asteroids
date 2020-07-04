import { Movement } from "wasm-asteroids"

export class Controller {
	constructor() {
		this.movement = new Movement();
		console.log(this.movement);

		window.addEventListener("keydown", ({ key }) => {
			if (key === 'W' || key === 'w' || key === 'ArrowUp') {
				this.movement.boost = true;
			}
			if (key === 'A' || key === 'a' || key === 'ArrowLeft') {
				this.movement.left = true;
			}
			if (key === 'D' || key === 'd' || key === 'ArrowRight') {
				this.movement.right = true;
			}
			if (key.match(/ /)) {
				this.movement.shoot = true;
			}
		})

		window.addEventListener("keyup", ({ key }) => {
			if (key === 'W' || key === 'w' || key === 'ArrowUp') {
				this.movement.boost = false;
			}
			if (key === 'A' || key === 'a' || key === 'ArrowLeft') {
				this.movement.left = false;
			}
			if (key === 'D' || key === 'd' || key === 'ArrowRight') {
				this.movement.right = false;
			}
			if (key.match(/ /)) {
				this.movement.shoot = false;
			}
		})
	}
}