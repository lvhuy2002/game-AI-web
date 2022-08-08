import { EntityManager } from "./EntityManager.js";

export class Entity {
    #xPos = 0;
    #yPos = 0;
    #width = 64;
    #height = 64;
    #spriteSheet;
    #isDead;
    #isDying;

    constructor(x, y, width, height, spriteSheet) {
      if (this.constructor === Entity) {
        throw new Error("Abstract classes can't be instantiated.");
      }

      this.#xPos = x;
      this.#yPos = y;
      this.#width = width;
      this.#height = height;
      this.#spriteSheet = spriteSheet;

      EntityManager.getInstance().addEntity(this);
    }
  
    update() {
      throw new Error("Method 'update()' must be implemented.");
    }

    getSpriteSheet() {
      return this.#spriteSheet;
    }

    getX() {
      return this.#xPos;
    }

    getY() {
      return this.#yPos;
    }

    setX(x) {
      this.#xPos = x;
    }

    setY(y) {
      this.#yPos = y;
    }

    getWidth() {
      return this.#width;
    }

    getHeight() {
      return this.#height;
    }

    getXPosOnSpriteSheet() {
      return 0;
    }

    getYPosOnSpriteSheet() {
      return 0;
    }

    getWidthOnSpriteSheet() {
      return this.getWidth();
    }

    getHeightOnSpriteSheet() {
      return this.getHeight();
    }

    isDead() {
      return this.#isDead;
    }

    die() {
      this.#isDead = true;
    }

    isDying() {
      return this.#isDying;
    }

    startDying() {
      this.#isDying = true;
    }
  }