import { Time } from '../System/Time.js';
import { Enemy } from './Enemy.js';
import { Score } from './Score.js';

export class EnemySpawner {
    #game
    #defaultSpawnRate = 2.34;
    #defaultEnemySpeed = 105;
    #minSpawnRate = 0.72;
    #maxEnemySpeed = 240;

    #currentSpawnRate;
    #currentEnemySpeed;
    #timeCounter = 0;
    #beforeCanBeIncreased = false;

    constructor(game) {
        this.#game = game;

        this.#currentSpawnRate = this.#defaultSpawnRate;
        this.#currentEnemySpeed = this.#defaultEnemySpeed;
    }

    update() {
        this.#spawnEnemiesByTime();
        this.#increaseSpawnRateAndSpeedByScore();
    }

    #spawnEnemiesByTime() {
        this.#timeCounter += Time.getInstance().getTimeDelta();
        if (this.#timeCounter >= this.#currentSpawnRate) {
            this.#spawnSingleEnemy(document.getElementById('player'));
            this.#timeCounter = 0;
        }
    }

    #spawnSingleEnemy(spriteSheet) {
        let randomX = Math.floor(Math.random() * (this.#game.width - 192));
        new Enemy(this.#game, randomX, -192, 192, 192, spriteSheet, this.#currentEnemySpeed);
    }

    #increaseSpawnRateAndSpeedByScore() {
        if (this.#currentEnemySpeed < this.#maxEnemySpeed && this.#currentSpawnRate > this.#minSpawnRate) {
            if (Score.getInstance().getScore() % 10 === 0 && this.#canBeIncreased() && !this.#beforeCanBeIncreased) {
                this.#currentSpawnRate -= this.#defaultSpawnRate * (1/10);
                this.#currentEnemySpeed += this.#defaultEnemySpeed * (1/10);
                console.log('increased spawn rate and speed');
            }

            this.#beforeCanBeIncreased = this.#canBeIncreased();
        }
    }

    #canBeIncreased() {
        let score = Score.getInstance().getScore();
        if (score > 0 && score % 10 === 0) {
            return true;
        }

        if (score % 10 !== 0) {
            return false;
        }
    }
}