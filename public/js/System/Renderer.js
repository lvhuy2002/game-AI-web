import { GameObjectManager } from "./GameObjectManager.js";
import { Text } from "./Text.js";

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
            layer.forEach(gameObject => {
                if (gameObject.getSpriteSheet() != null) {
                    this.renderGameObjects(gameObject);
                }

                if (gameObject instanceof Text) {
                    this.renderText(gameObject);
                }
            });
        });
    }

    renderGameObjects(gameObject) {
        this.#ctx.drawImage(gameObject.getSpriteSheet(), gameObject.getXPosOnSpriteSheet(), gameObject.getYPosOnSpriteSheet(), gameObject.getWidthOnSpriteSheet(), gameObject.getHeightOnSpriteSheet(), gameObject.getX(), gameObject.getY(), gameObject.getWidth(), gameObject.getHeight());
    }

    renderText(text) {
        this.#ctx.font = text.getStyle() + ' ' + text.getSize() + 'px ' + text.getFont();
        this.#ctx.fillStyle = text.getColor();
        this.#ctx.textAlign = "center";
        this.#ctx.fillText(text.getValue(), text.getX(), text.getY());
    }
}