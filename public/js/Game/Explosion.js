import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";

export class Explosion extends Entity {
    #game;

    #animator;
    #explosionAnimation;

    constructor(game, x, y, width, height, spriteSheet) {
        super(x, y, width, height, spriteSheet);
        this.#game = game;

        this.#explosionAnimation = new Animation(12, false, 0, 0.06);
        this.#animator = new Animator(this.#explosionAnimation);
    }

    update() {
        this.#animator.playAnimation();

        if (!this.#animator.isPlaying()) {
            this.die();
        }
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}