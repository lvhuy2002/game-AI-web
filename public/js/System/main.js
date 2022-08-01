import { Game } from '../Game/Game.js';
import { Time } from './Time.js';
import { InputHandler } from './InputHandler.js';
import { Renderer } from './Renderer.js';

window.addEventListener("load", function() {
    const canvas = this.document.getElementById("canvas1");
    canvas.width = 720;
    canvas.height = 1280;

    //Phải theo thứ tự như dưới
    //////////1//////////
    const renderer = new Renderer(canvas);
    Renderer.setInstance(renderer);

    //////////2//////////
    const game = new Game(canvas);

    function animate() {
        //Phải theo thứ tự như dưới
        //////////1//////////
        Time.getInstance().update();

        //////////2//////////
        game.update();
        Renderer.getInstance().render();
        Renderer.getInstance().update();

        //////////3//////////
        InputHandler.getInstance().update();
        requestAnimationFrame(animate);
    }
    animate();
});