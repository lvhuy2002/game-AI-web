export class Losing {
    static #instance;
    #lose;
    
    constructor() {
        this.#lose = false;
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new Losing();
        }
        return this.#instance;
    }
    
    isLose() {
        return this.#lose;
    }

    setLose() {
        if (!this.#lose) {
            this.#lose = true;
        } 
    }
    
    resetLose() {
        this.#lose = false;
    }
}