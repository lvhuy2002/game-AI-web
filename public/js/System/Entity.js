import { GameObject } from "./GameObject.js";

export class Entity extends GameObject {
    #isDying = false;

    constructor(game, x, y, width, height, layer, spriteSheet) {
      super(game, x, y, width, height, layer, spriteSheet);

      if (this.constructor === Entity) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    update() {
      throw new Error("Method 'update()' must be implemented.");
    }

    isDying() {
      return this.#isDying;
    }

    startDying() {
      this.#isDying = true;
    }
  }