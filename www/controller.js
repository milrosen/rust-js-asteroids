import { Movement } from "wasm-asteroids"

export class Controller {
	constructor() {
		this.movement = new Movement();
		console.log(this.movement);

		window.addEventListener("keydown", ({ key }) => {
			if (key.match(/W|w/)) {
				this.movement.boost = true;
			}
			if (key.match(/A|a/)) {
				this.movement.left = true;
			}
			if (key.match(/D|d/)) {
				this.movement.right = true;
			}
			if (key.match(/ /)) {
				this.movement.shoot = true;
			}
		})

		window.addEventListener("keyup", ({ key }) => {
			if (key.match(/W|w/)) {
				this.movement.boost = false;
			}
			if (key.match(/A|a/)) {
				this.movement.left = false;
			}
			if (key.match(/D|d/)) {
				this.movement.right = false;
			}
			if (key.match(/ /)) {
				this.movement.shoot = false;
			}
		})
	}
}