import Card from './card';
import Timer from './timer';

export default class Game {
    constructor(fieldSize) {
        this.gameField = getNewGameField(fieldSize);
        this.timer = new Timer();
    }

    start() {
        if (this.cardState == "facedown") {
            this.cardState = "faceup";
        } else if (this.cardState == "faceup") {
            this.cardState = "facedown";
        }
    }

    end() {
        this.cardState = "found";
    }

    getNewGameField(fieldSize) {
        var gameField = new Array(fieldSize);
        for (var i = 1; i <= gameField.length / 2; i++) {
            gameField[i] = new Card(i);
            gameField[i + gameField.length / 2] = new Card(i);
        }
        gameField = gameField.sort(function () {
            return Math.random() - 0.5;
        });
        return gameField;
    }
}