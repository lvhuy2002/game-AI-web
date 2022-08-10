import { EnemySpawner } from './EnemySpawner.js';
import { BackGround } from './BG.js';
import { EntityManager } from '../System/EntityManager.js';
export class Game {
    #isGameStateChange
    #backGround

    constructor(canvas, canvasDraw, canvasDrawResize, model, tf) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.loseHeight = canvas.height - 32;
        this.canvasDraw = canvasDraw;
        this.canvasDrawResize = canvasDrawResize;
        this.model = model;
        this.tf = tf;
        this.#isGameStateChange = true;
        this.enemyManager = new EnemySpawner(this);
    }
    
    changeState() {
        if (this.#isGameStateChange) {
            this.#backGround = new BackGround(this, document.getElementById('bg'));
            this.#isGameStateChange = false;
        }
    }
    changeIsGameStateChange() {
        if (EntityManager.getInstance.getEntityCount > 0) {
            EntityManager.getInstance().removeAllEntities();
        }
        this.#isGameStateChange = true;
    }
    update() {
        this.enemyManager.update();
    }
}