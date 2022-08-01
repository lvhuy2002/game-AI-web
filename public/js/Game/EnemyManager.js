import { Time } from '../System/Time.js';
import { Enemy } from './Enemy.js';

export class EnemyManager {
    #enemies;
    #game
    #spawnRate = 3;
    #timeCounter = 0;

    constructor(game) {
        this.#game = game;
        this.#enemies = [];
    }

    update() {
        this.#enemies.forEach(enemy => {
            enemy.update();
        });

        this.deleteDeadEnemies();


        this.spawnEnemiesByTime();
    }

    deleteDeadEnemies() {
        let length = this.#enemies.length;
        for (let i = 0; i < length; i++) {
            if (this.#enemies[i] != null) {
                if (this.#enemies[i].isDead()) {
                    this.#enemies.splice(i, 1);
                    i--;
                }
            }
        }
    }

    spawnEnemiesByTime() {
        this.#timeCounter += Time.getInstance().getTimeDelta();
        if (this.#timeCounter >= this.#spawnRate) {
            this.spawnSingleEnemy(document.getElementById('player'));
            this.#timeCounter = 0;
        }
    }

    spawnSingleEnemy(spriteSheet) {
        let randomX = Math.floor(Math.random() * (this.#game.width - 192));
        let enemy = new Enemy(this.#game, randomX, -192, 192, 192, spriteSheet);
        this.#enemies.push(enemy);
    }
}