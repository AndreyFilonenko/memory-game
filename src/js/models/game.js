"use strict"

import Card from "./card";
import Timer from "./timer";

export default class Game {
    constructor(fieldSize) {
        this.gameField = Game.getNewGameField(fieldSize);
        this.timer = new Timer();
        this.clicks = 0;                
        this.startTimeoutId = null;
    }

    start() {        
        this.flipAll();
        this.startTimeoutId = setTimeout("", Math.sqrt(this.gameField.length) * 1000);
        this.flipAll();
        this.timer.start();
    }

    end() {
        this.timer.stop();
    }

    flipAll() {
        for (var i = 0; i < this.gameField.length; i++) {
            this.gameField[i].flip();
        }
    }

    static getNewGameField(fieldSize) {
        var gameField = new Array(fieldSize);
        for (var i = 0; i < gameField.length / 2; i++) {
            gameField[i] = new Card(i + 1);
            gameField[i + gameField.length / 2] = new Card(i + 1);
        }
        gameField = gameField.sort(function () {
            return Math.random() - 0.5;
        });
        return gameField;
    }
}