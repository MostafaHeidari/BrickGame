export default class InputHandler{

    constructor(paddle, game) {
        document.addEventListener("keydown",(event)=>{
            // alert(event.keyCode);
            switch (event.keyCode) {
                case 37: paddle.moveLeft(); break;
                case 65: paddle.moveLeft(); break;
                case 39: paddle.moveRight(); break;
                case 40: paddle.moveRight(); break;
                case 27: game.togglePause(); break;
                case 32: game.start(); break;
            }
        });

        document .addEventListener("keyup",(event)=>{
            // alert(event.KeyCode);
            switch (event.keyCode){

                case 37:
                    if (paddle.Speed < 0)
                        paddle.stop();
                    break;


                case 65:
                    if (paddle.Speed < 0)
                        paddle.stop();
                    break;

                case 39:
                    if (paddle.Speed > 0)
                        paddle.stop();
                    break;

                case 68:
                    if (paddle.Speed > 0)
                        paddle.stop();
                    break;
            }
        })
    }
}