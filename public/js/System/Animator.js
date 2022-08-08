import { Time } from './Time.js';

export class Animator {
    #currentAnimation;
    #frameCounter = 0;
    #timeCounter = 0;
    #isPlaying = false;

    constructor(animation) {
        this.#currentAnimation = animation;

        if (this.#currentAnimation != null) {
            this.#isPlaying = true;
        }
    }

    playAnimation() {
        if (this.#currentAnimation.isLooping()) {
            this.loopAnimation();
        } else {
            this.playAnimationOnce();
        }
    }

    loopAnimation() {
        this.#timeCounter += Time.getInstance().getTimeDelta();
        if (this.#timeCounter >= this.#currentAnimation.getTimePerFrame()) {
            this.#frameCounter++;
            this.#timeCounter = 0;
        }
        
        if (this.#frameCounter >= this.#currentAnimation.getTotalFrames()) {
            this.#frameCounter = 0;
        }
    }

    playAnimationOnce() {
        this.#timeCounter += Time.getInstance().getTimeDelta();
        if (this.#timeCounter >= this.#currentAnimation.getTimePerFrame() && this.#frameCounter < this.#currentAnimation.getTotalFrames()) {
            this.#frameCounter++;
            this.#timeCounter = 0;
        }
    }

    switchAnimation(animation) {
        if (animation !== this.#currentAnimation) {
            this.#currentAnimation = animation;
            this.#frameCounter = 0;
            this.#timeCounter = 0;
            this.#isPlaying = true;
        }
    }

    isPlaying() {
        if (this.#frameCounter >= this.#currentAnimation.getTotalFrames() && !this.#currentAnimation.isLooping()) {
            this.#isPlaying = false;
        }
        
        return this.#isPlaying;
    }

    getCurrentFrame() {
        return this.#frameCounter;
    }

    getRowOfCurrentAnimationOnSpriteSheet() {
        return this.#currentAnimation.getRowOnSpriteSheet();
    }
}