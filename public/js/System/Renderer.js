import { EntityManager } from "./EntityManager.js";

export class Renderer {
    #canvas;
    #ctx;
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

    render() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        EntityManager.getInstance().getLayers().forEach(layer => {
            layer.forEach(entity => {
                this.renderEntities(entity);
            });
        });
    }

    renderEntities(entity) {
        this.#ctx.drawImage(entity.getSpriteSheet(), entity.getXPosOnSpriteSheet(), entity.getYPosOnSpriteSheet(), entity.getWidthOnSpriteSheet(), entity.getHeightOnSpriteSheet(), entity.getX(), entity.getY(), entity.getWidth(), entity.getHeight());
    }
}