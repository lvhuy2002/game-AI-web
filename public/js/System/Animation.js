export class Animation {
    #totalFrames;
    #isLooping;
    #rowOnSpriteSheet;
    #timePerFrame;
    
    constructor(totalFrames, isLooping, rowOnSpriteSheet, timePerFrame) {
        this.#totalFrames = totalFrames;
        this.#isLooping = isLooping;
        this.#rowOnSpriteSheet = rowOnSpriteSheet;
        this.#timePerFrame = timePerFrame;
    }

    isLooping() {
        return this.#isLooping;
    }

    getRowOnSpriteSheet() {
        return this.#rowOnSpriteSheet;
    }

    getTimePerFrame() {
        return this.#timePerFrame;
    }

    getTotalFrames() {
        return this.#totalFrames;
    }
}