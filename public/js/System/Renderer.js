export class Renderer {
    #canvas;
    #ctx;
    #entities = [];
    static #instance;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#ctx = canvas.getContext("2d");
    }

    static getInstance() {
        return this.#instance;
    }
    static setInstance(renderer) {
        this.#instance = renderer;
    }

    update() {
        this.deleteDeadEntities();
    }

    deleteDeadEntities() {
        let length = this.#entities.length;
        for (let i = 0; i < length; i++) {
            if (this.#entities[i] != null) {
                if (this.#entities[i].isDead()) {
                    this.#entities.splice(i, 1);
                    i--;
                }
            }
        }
    }

    render() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#entities.forEach(entity => {
            this.renderEntities(entity);
        });
    }

    renderEntities(entity) {
        this.#ctx.drawImage(entity.getSpriteSheet(), entity.getXPosOnSpriteSheet(), entity.getYPosOnSpriteSheet(), entity.getWidth(), entity.getHeight(), entity.getX(), entity.getY(), entity.getWidth(), entity.getHeight());
    }

    addEntity(entity) {
        this.#entities.push(entity);
    }
}