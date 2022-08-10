import { Time } from '../System/Time.js';
import { Enemy } from './Enemy.js';
import { Potion } from './Potion.js';
import { Score } from './Score.js';

export class EnemySpawner {
    #game
    #defaultSpawnRate = 2.34;
    #defaultEnemySpeed = 105;
    #minSpawnRate = 1;
    #maxEnemySpeed = 240;

    #currentSpawnRate;
    #currentEnemySpeed;
    #timeCounter = 0;
    #beforescoreReachMultiplicationOf10 = false;

    constructor(game) {
        this.#game = game;

        this.#currentSpawnRate = this.#defaultSpawnRate;
        this.#currentEnemySpeed = this.#defaultEnemySpeed;
    }

    update() {
        this.#spawnEnemiesByTime();

        if (Math.random() < 0.5) {
            this.#spawnPotionWhenScoreAbove(40);
        }

        this.#increaseSpawnRateAndSpeedByScore();
        

        this.#beforescoreReachMultiplicationOf10 = this.#scoreReachMultiplicationOf10();
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
            if (this.#scoreReachMultiplicationOf10() && !this.#beforescoreReachMultiplicationOf10) {
                this.#currentSpawnRate -= this.#defaultSpawnRate * (1/5);
                this.#currentEnemySpeed += this.#defaultEnemySpeed * (1/5);
                console.log('increased spawn rate and speed');
            }
        }
    }

    #scoreReachMultiplicationOf10() {
        let score = Score.getInstance().getScore();
        if (score > 0 && score % 10 === 0) {
            return true;
        }

        if (score % 10 !== 0) {
            return false;
        }
    }

    #spawnPotionWhenScoreAbove(score)  {
        if (Score.getInstance().getScore() > score && this.#scoreReachMultiplicationOf10() && !this.#beforescoreReachMultiplicationOf10) {
            this.#spawnSinglePotion(document.getElementById('potion'));
        }
    }
    

    #spawnSinglePotion(spriteSheet) {
        let randomX = Math.floor(Math.random() * (this.#game.width - 192));
        new Potion(this.#game, randomX, -192, 192, 192, spriteSheet, this.#currentEnemySpeed);
    }
}