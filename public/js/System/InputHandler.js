export class InputHandler {
    static #instance;
    
    constructor() {
        this.keysCurrentlyDown = new Set();
        this.keysLast = new Set();
        
        window.addEventListener("keydown", e => {
            this.keysCurrentlyDown.add(e.key);
        });

        window.addEventListener("keyup", e => {
            this.keysCurrentlyDown.delete(e.key);
        });
    }

    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new InputHandler();
        }
        return this.#instance;
    }

    update() {
        this.keysLast = new Set(this.keysCurrentlyDown);
    }

    isDown(keyCode) {
        return !this.keysLast.has(keyCode) && this.keysCurrentlyDown.has(keyCode);
    }
}