import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Time } from "../System/Time.js";
import { Balloon } from "./Balloon.js";

export class Enemy extends Entity {
    #animator
    #idlingAnimation;

    #speed = 100;
    #game

    #balloon

    constructor(game, x, y, width, height, spriteSheet) {
        super(x, y, width, height, spriteSheet);
        this.#game = game;

        this.#idlingAnimation = new Animation(4, true, 0, 0.12);
        this.#animator = new Animator(this.#idlingAnimation);

        this.#balloon = new Balloon(this, x, y, 192, 192, document.getElementById('balloon'));
    }

    update(canvasDraw, canvasDrawResize, model, tf) {
        if (this.getY() > this.#game.height - 192) {
            this.die();
        }

        this.#balloon.update(canvasDraw, canvasDrawResize, model, tf);
        this.#animator.playAnimation();

        this.controlSpeed();
        this.move();
    }

    move() {
        this.setY(this.getY() + Time.getInstance().getTimeDelta() * this.#speed);
    }

    controlSpeed() {
        if (this.#balloon.isDying() || this.#balloon.isDead()) {
            this.#speed += 15;
        }
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}