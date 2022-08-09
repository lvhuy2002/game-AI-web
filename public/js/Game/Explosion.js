import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";

export class Explosion extends Entity {
    #animator;
    #explosionAnimation;

    constructor(game, x, y, width, height, spriteSheet) {
        super(game, x, y, width, height, 0, spriteSheet);

        this.#explosionAnimation = new Animation(12, false, 0, 0.06);
        this.#animator = new Animator(this.#explosionAnimation);
    }

    update() {
        this.#animator.playAnimation();

        if (!this.#animator.isPlaying()) {
            this.removeInNextUpdate();
        }
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}