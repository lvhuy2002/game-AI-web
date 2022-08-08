import { Entity } from "../System/Entity.js";
import { Animation } from "../System/Animation.js";
import { Animator } from "../System/Animator.js";

export class BackGround extends Entity {
    #animator;
    #idlingAnimation;
    
    constructor(game, spriteSheet) {
        super(0, 0, game.width, game.height, spriteSheet);
        this.#idlingAnimation = new Animation(1, true, 0, 0.12);
        this.#animator = new Animator(this.#idlingAnimation);
    }

    update() {
        this.#animator.playAnimation();
    }

    getXPosOnSpriteSheet() {
        return 0;
    }
  
    getYPosOnSpriteSheet() {
        return 0;
    }

    getWidthOnSpriteSheet() {
        return 986;
    }
  
    getHeightOnSpriteSheet() {
        return 720;
    }
}