export class Score {
    #score = 0;
    static #instance;

    constructor(game) {
        this.game = game;
        this.score = 0;
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new Score();
        }
        return this.#instance;
    }

    increaseScoreByOne() {
        this.#score++;
    }

    getScore() {
        return this.#score;
    }

    resetScore() {
        this.#score = 0;
    }
}