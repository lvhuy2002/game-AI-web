import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Draw } from "../System/Draw.js";
import { Score } from "./Score.js";
export class Balloon extends Entity {
    #game;
    #isCount
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
        this.#isCount = false;
    }

    update() {
        // DELETE
        if (!this.#animator.isPlaying()) {
            this.die();
        }

        this.#animator.playAnimation();

        // Alive
        if (!this.isDying()) {
            this.#followParent();   
        }
        ////////////////////////////////

        // Dying
        if (Draw.getExistInstance().getPredictNumber() === this.#value) {
            if (!this.#isCount) {
                Score.getInstance().update();
                this.#isCount = true;
            }
            this.startDying();
        }

        if (this.isDying()) {
            this.#animator.switchAnimation(this.#popAnimation);
        }
        ////////////////////////////////
    }

    static setScore() {
        this.constructor.scores = 0;
    }
    #followParent() {
        this.setX(this.#parent.getX());
        this.setY(this.#parent.getY() - 64 * 2);
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}