export class Score {
    static #instance
    #Score
    
    constructor() {
        this.#Score = 0;
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new Score();
        }
        return this.#instance;
    }
    update() {
        this.#Score++;
    }
    getScore() {
        return this.#Score;
    }
    resetScore() {
        this.#Score = 0;
    }
}