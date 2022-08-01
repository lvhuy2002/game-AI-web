import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { InputHandler } from "../System/InputHandler.js";

export class Balloon extends Entity {
    #animator;
    #idlingAnimation;
    #popAnimation;
    #parent;
    #value;

    constructor(parent, x, y, width, height, spriteSheet) {
        super(x, y, width, height, spriteSheet);
        this.#parent = parent;
        this.#value = Math.floor(Math.random() * 9);

        this.#idlingAnimation = new Animation(1, true, this.#value, 0.12);
        this.#popAnimation = new Animation(9, false, this.#value, 0.06);
        this.#animator = new Animator(this.#idlingAnimation);
    }

    update() {
        if (!this.#animator.isPlaying() || this.#parent.isDead()) {
            this.die();
        }

        this.#animator.playAnimation();

        if (!this.isDying()) {
            this.followParent();   
        }

        if (InputHandler.getInstance().isDown(this.#value.toString())) {
            this.startDying();
        }

        if (this.isDying()) {
            this.#animator.switchAnimation(this.#popAnimation);
        }
    }

    followParent() {
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