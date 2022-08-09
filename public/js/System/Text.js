import { GameObject } from "./GameObject.js";

export class Text extends GameObject {
    #font;
    #size;
    #value = "";
    #color = "black";
    #style;

    constructor(game, x, y, layer, font, size, value, color, style) {
      super(game, x, y, 0, 0, layer);
      this.#font = font;
      this.#size = size;

      if (value != undefined && value != null) {
        this.#value = value;
      }

      if (color != undefined && color != null) {
        this.#color = color;
      }

      if (style != undefined && style != null) {
        this.#style = style;
      }
    }
  
    update() {
      throw new Error("Method 'update()' must be implemented.");
    }

    getFont() {
      return this.#font;
    }

    setFont(font) {
      this.#font = font;
    }

    getSize() {
      return this.#size;
    }

    setSize(size) {
      this.#size = size;
    }

    getValue() {
      return this.#value;
    }

    setValue(value) {
      this.#value = value;
    }

    getColor() {
      return this.#color;
    }

    setColor(color) {
      this.#color = color;
    }

    getStyle() {
      return this.#style;
    }
}