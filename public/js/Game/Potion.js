import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";
import { Time } from "../System/Time.js";
import { Balloon } from "./Balloon.js";
import { GameObjectManager } from "../System/GameObjectManager.js";

export class Potion extends Entity {
    #animator
    #idlingAnimation;

    #speed;

    #balloon

    #explosionSound;

    constructor(game, x, y, width, height, spriteSheet, speed) {
        super(game, x, y, width, height, 1, spriteSheet);

        this.#speed = speed;

        this.#idlingAnimation = new Animation(1, true, 0, 0.12);
        this.#animator = new Animator(this.#idlingAnimation);

        this.#balloon = new Balloon(game, x, y, 192, 192, document.getElementById('balloon'), this);

        // this.#explosionSound = new Howl({
        //     src: ['./res/sounds/sfx_exp_short_soft1.wav'],
        //     volume: 0.5
        // });
    }

    update() {
        // DELETE when alive
        if (this.getY() > this.getGame().height + 7) {
            this.removeInNextUpdate();
        }
        ////////////////////////////////

        // DELETE when dying
        if (this.getY() > this.getGame().height - this.getWidth() + 7 && this.isDying()) {
            // effect
            GameObjectManager.getInstance().getLayers().forEach(layer => {
                layer.forEach(gameObject => {
                    if (gameObject instanceof Entity) {
                        gameObject.startDying();
                    }
                });
            });
        }
        ////////////////////////////////

        this.#balloon.update();
        this.#animator.playAnimation();
        this.#move();

        // Dying
        if (this.#balloon.isDying() || this.#balloon.canBeRemoved()) {
            this.startDying();
        }

        if (this.isDying()) {
            this.#acelerate();
        }
        /////////////////////////////////

        console.log('holy potion!!!!!')
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