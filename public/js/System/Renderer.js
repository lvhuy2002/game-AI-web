import { GameObjectManager } from "./GameObjectManager.js";

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

        GameObjectManager.getInstance().getLayers().forEach(layer => {
            layer.forEach(entity => {
                this.renderEntities(entity);
            });
        });
    }

    renderEntities(entity) {
        this.#ctx.drawImage(entity.getSpriteSheet(), entity.getXPosOnSpriteSheet(), entity.getYPosOnSpriteSheet(), entity.getWidthOnSpriteSheet(), entity.getHeightOnSpriteSheet(), entity.getX(), entity.getY(), entity.getWidth(), entity.getHeight());
    }

    renderText(text) {
        // this.#ctx.fillText(text, this.#canvas.width / 2, this.#canvas.height / 2);
        ctx.font = '48px serif';
        ctx.fillText('Hello world', this.#canvas.width / 2, 50);
    }
}