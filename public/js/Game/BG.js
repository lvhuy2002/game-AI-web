import { Entity } from "../System/Entity.js";

export class BackGround extends Entity {
    
    constructor(game, spriteSheet) {
        super(game, 0, 0, game.width, game.height, 0, spriteSheet);
    }

    update() {
    }

    getWidthOnSpriteSheet() {
        return 986;
    }
  
    getHeightOnSpriteSheet() {
        return 651;
    }
}