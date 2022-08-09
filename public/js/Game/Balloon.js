import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Draw } from "../System/Draw.js";
import { Score } from "./Score.js";
export class Balloon extends Entity {
    #game;

    #animator;
    #idlingAnimation;
    #popAnimation;

    #parent;
    #value;

    constructor(game, x, y, width, height, spriteSheet, parent) {
        super(x, y, width, height, spriteSheet);
        this.#game = game;
        this.#parent = parent;
        this.#value = Math.floor(Math.random() * 9);

        this.#idlingAnimation = new Animation(1, true, this.#value, 0.12);
        this.#popAnimation = new Animation(9, false, this.#value, 0.06);
        this.#animator = new Animator(this.#idlingAnimation);
    }

    update() {
        let beforeDying = this.isDying();

        // DELETE
        if (!this.#animator.isPlaying()) {
            this.die();
        }
        ////////////////////////////////

        this.#animator.playAnimation();

        // Alive
        if (!this.isDying()) {
            this.#followParent();   
        }
        ////////////////////////////////

        // Dying
        if (Draw.getExistInstance().getPredictNumber() === this.#value) {
            this.startDying();
        }

        if (!beforeDying && this.isDying()) {
            Score.getInstance().increaseScoreByOne();
        }

        if (this.isDying()) {
            this.#animator.switchAnimation(this.#popAnimation);
        }
        ////////////////////////////////
    }

    #followParent() {
        this.setX(this.#parent.getX());
        this.setY(this.#parent.getY() - 64 * 2 + 5);
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}