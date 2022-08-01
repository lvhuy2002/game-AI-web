import { Enemy } from './Enemy.js';
import { EnemyManager } from './EnemyManager.js';

export class Game {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;

        this.enemyManager = new EnemyManager(this);
    }

    update() {
        this.enemyManager.update();
    }
}