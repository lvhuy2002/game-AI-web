export class Time {
    #timeDelta = 0;
    #lastTime = 0;
    static #instance;

    constructor() {
        this.#lastTime = Date.now();
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new Time();
        }
        return this.#instance;
    }

    update() {
        this.#timeDelta = Date.now() - this.#lastTime;
        this.#lastTime = Date.now();
    }

    getTimeDelta() {
        return this.#timeDelta / 1000;
    }
}