export default class Paddle {

    constructor(game) {

        this.GameWidth = game.GameWidth;

        this.width = 130;
        this.height = 15;

        this.MaxSpeed = 10;
        this.Speed = 0;

        this.position = {
            x: game.GameWidth / 2 - this.width / 2,
            y: game.GameHeight - this.height - 10
        };
    }

    moveLeft(){
        this.Speed = -this.MaxSpeed;
    }

    moveRight(){
        this.Speed = this.MaxSpeed;
    }

    stop(){
        this.Speed = 0;

    }

    draw(ctx){
        ctx.fillStyle = "#15b79e";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        this.position.x += this.Speed;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.GameWidth) this.position.x = this.GameWidth - this.width;
    }
}