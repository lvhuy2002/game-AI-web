import { Text } from "../System/Text.js";
import { Score } from "./Score.js";

export class ScoreText extends Text {

    constructor(game, x, y, layer, font, size, value, color, style) {
      super(game, x, y, layer, font, size, value, color, style);
    }
  
    update() {
      this.setValue(Score.getInstance().getScore());
    }

}