import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Draw } from "../System/Draw.js";
import { Score } from "./Score.js";
export class Balloon extends Entity {
    #animator;
    #idlingAnimation;
    #popAnimation;

    #parent;
    #value;

    #popSound;

    #beforeDying = false;

    constructor(game, x, y, width, height, spriteSheet, parent) {
        super(game, x, y, width, height, 0, spriteSheet);
        this.#parent = parent;
        this.#value = Math.floor(Math.random() * 9);

        this.#idlingAnimation = new Animation(1, true, this.#value, 0.12);
        this.#popAnimation = new Animation(9, false, this.#value, 0.06);
        this.#animator = new Animator(this.#idlingAnimation);

        this.#popSound = new Howl({
            src: ['./res/sounds/clap sound effect.wav'],
            volume: 0.15
        });
    }

    update() {
        // DELETE
        if (!this.#animator.isPlaying()) {
            this.removeInNextUpdate();
        }

        if (this.getY() > this.getGame().height + 7) {
            this.removeInNextUpdate();
        }
        ////////////////////////////////

        this.#animator.playAnimation();

        // Alive
        if (!this.isDying()) {
            this.#followParent();   
        }
        ////////////////////////////////

        // Dying
        if (Draw.getExistInstance().getPredictNumber() === this.#value && this.getY() > -64) {
            this.startDying();
        }

        if (!this.#beforeDying && this.isDying()) {
            this.#popSound.play();
            Score.getInstance().increaseScoreByOne();
        }

        if (this.isDying()) {
            this.#animator.switchAnimation(this.#popAnimation);
        }
        ////////////////////////////////

        this.#beforeDying = this.isDying();
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