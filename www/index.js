import {
	Game
} from "wasm-asteroids";
import {
	Controller
} from './controller.js'


const game = new Game(window.innerWidth, window.innerHeight + 4);
const controller = new Controller();

const canvas = document.getElementById('asteroids');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight + 4;

window.setInterval(() => {
	game.render(ctx);
	game.update(controller.movement);
}, 25);