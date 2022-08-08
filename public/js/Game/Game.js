import { EnemySpawner } from './EnemySpawner.js';
import { BackGround } from './BG.js';
export class Game {
    constructor(canvas, canvasDraw, canvasDrawResize, model, tf) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasDraw = canvasDraw;
        this.canvasDrawResize = canvasDrawResize;
        this.model = model;
        this.tf = tf;

        this.backGround = new BackGround(this, document.getElementById('bg'))
        this.enemyManager = new EnemySpawner(this);
    }
    
    update() {
        this.enemyManager.update();
    }
}