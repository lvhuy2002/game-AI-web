import { EnemySpawner } from './EnemySpawner.js';
import { BackGround } from './BG.js';
import { ScoreText } from "./ScoreText.js";

export class Game {
    constructor(canvas, canvasDraw, canvasDrawResize, model, tf) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasDraw = canvasDraw;
        this.canvasDrawResize = canvasDrawResize;
        this.model = model;
        this.tf = tf;

        this.backGround = new BackGround(this, document.getElementById('bg'));
        this.scoreText = new ScoreText(this, this.width / 2, this.height / 4, 0, 'Arial', 200, '', 'white', 'bold');
        this.enemyManager = new EnemySpawner(this);
    }
    
    update() {
        this.enemyManager.update();
    }
}