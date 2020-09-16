import Game from "./game.js";

let canvas = document.querySelector("#GameScreen");
let ctx = canvas.getContext("2d");

const GameWidth = 800;

const GameHeight = 600;

let game = new Game(GameWidth,GameHeight);

let lastTime = 0;

function GameLoop(timestap) {
    let deltaTime = timestap -lastTime;
    lastTime = timestap;

    ctx.clearRect(0, 0, GameWidth, GameHeight);

    game.update(deltaTime);
    game.draw(ctx)

    requestAnimationFrame(GameLoop);
}
requestAnimationFrame(GameLoop);