import { Enemy } from './Enemy.js';
import { EnemyManager } from './EnemyManager.js';
import { BackGround } from './BG.js';
export class Game {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.backGround = new BackGround(this, document.getElementById('bg'))
        this.enemyManager = new EnemyManager(this);
    }
    
    update(canvasDraw, canvasDrawResize, model, tf) {
        //this.backGround.update();
        this.enemyManager.update(canvasDraw, canvasDrawResize, model, tf);
    }
}