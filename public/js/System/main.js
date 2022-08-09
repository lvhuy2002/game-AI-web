import { Game } from '../Game/Game.js';
import { Time } from './Time.js';
import { Renderer } from './Renderer.js';
import { Draw } from './Draw.js'
import { EntityManager } from './EntityManager.js';
window.addEventListener("load", function() {
    const canvas = this.document.getElementById("canvas1");
    canvas.width = 1345;
    canvas.height = 1000;

    const canvasDraw = this.document.getElementById("canvas2");
    const canvasDrawResize = this.document.getElementById("canvas2-resize")
    canvasDraw.width = 250;
    canvasDraw.height = 250;

    
    async function init() {
        let model;
        model = await tf.loadLayersModel('model/model.json');
        //model.summary();
        
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
            EntityManager.getInstance().update();
            game.update();
            Renderer.getInstance().render();

            //////////3//////////
            Draw.getInstance(canvasDraw, canvasDrawResize, model, tf).update();
            requestAnimationFrame(animate);
        }
        animate();
    }
    init();

    
});

