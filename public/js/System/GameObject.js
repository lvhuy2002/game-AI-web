import { GameObjectManager } from "./GameObjectManager.js";

export class GameObject {
    #xPos = 0;
    #yPos = 0;
    #width;
    #height;
    #layer = 0;
    #spriteSheet;
    #game;
    #canBeRemoved = false;

    constructor(game, x, y, width, height, layer, spriteSheet) {
      this.#game = game;
      this.#xPos = x;
      this.#yPos = y;
      this.#width = width;
      this.#height = height;

      if (layer != undefined && layer != null) {
        this.#layer = layer;
      }

      if (spriteSheet != undefined && spriteSheet != null) {
        this.#spriteSheet = spriteSheet;
      }

      GameObjectManager.getInstance().addGameObject(this);
    }
  
    update() {
      throw new Error("Method 'update()' must be implemented.");
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

    getSpriteSheet() {
      return this.#spriteSheet;
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

    getGame() {
      return this.#game;
    }

    setLayerNumber(layer) {
      this.#layer = layer;
    }

    getLayerNumber() {
      return this.#layer;
    }

    canBeRemoved() {
      return this.#canBeRemoved;
    }

    removeInNextUpdate() {
      this.#canBeRemoved = true;
    }
  }