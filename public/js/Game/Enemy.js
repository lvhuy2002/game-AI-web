import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Time } from "../System/Time.js";
import { Balloon } from "./Balloon.js";
import { Explosion } from "./Explosion.js";

export class Enemy extends Entity {
    #animator
    #idlingAnimation;
    #fallingAnimation;

    #speed = 150;
    #game

    #balloon

    constructor(game, x, y, width, height, spriteSheet) {
        super(x, y, width, height, spriteSheet);
        this.#game = game;

        this.#idlingAnimation = new Animation(4, true, 0, 0.12);
        this.#fallingAnimation = new Animation(4, true, 1, 0.12);
        this.#animator = new Animator(this.#idlingAnimation);

        this.#balloon = new Balloon(game, x, y, 192, 192, document.getElementById('balloon'), this);
    }

    update() {
        // DELETE
        if (this.getY() > this.#game.height - this.getWidth() - 80 && this.isDying()) {
            let explosion = new Explosion(this.#game, this.getX() + this.getWidth() / 2, this.getY(), 64, 64, document.getElementById('explosion'));
            this.die();
        }

        this.#balloon.update();
        this.#animator.playAnimation();
        this.#move();

        // Dying
        if (this.#balloon.isDying() || this.#balloon.isDead()) {
            this.startDying();
        }

        if (this.isDying()) {
            this.#animator.switchAnimation(this.#fallingAnimation);
            this.#acelerate();
        }
        /////////////////////////////////
    }

    #move() {
        this.setY(this.getY() + Time.getInstance().getTimeDelta() * this.#speed);
    }

    #acelerate() {
        this.#speed += 15;
    }

    getXPosOnSpriteSheet() {
        return this.#animator.getCurrentFrame() * this.getWidth();
    }

    getYPosOnSpriteSheet() {
        return this.#animator.getRowOfCurrentAnimationOnSpriteSheet() * this.getHeight();
    }
}