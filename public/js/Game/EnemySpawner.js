import { Time } from '../System/Time.js';
import { Enemy } from './Enemy.js';

export class EnemySpawner {
    #game
    #spawnRate = 1.8;
    #timeCounter = 0;

    constructor(game) {
        this.#game = game;
    }

    update() {
        this.#spawnEnemiesByTime();
    }

    #spawnEnemiesByTime() {
        this.#timeCounter += Time.getInstance().getTimeDelta();
        if (this.#timeCounter >= this.#spawnRate) {
            this.#spawnSingleEnemy(document.getElementById('player'));
            this.#timeCounter = 0;
        }
    }

    #spawnSingleEnemy(spriteSheet) {
        let randomX = Math.floor(Math.random() * (this.#game.width - 192));
        let enemy = new Enemy(this.#game, randomX, -192, 192, 192, spriteSheet);
    }
}