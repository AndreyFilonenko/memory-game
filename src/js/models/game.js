"use strict"

import Card from "./card";
import Timer from "./timer";
import {shuffle} from "./../helpers/helpers";

export default class Game {
    constructor(fieldSize, maxFieldSize) {
        this.gameField = Game.getNewGameField(fieldSize, maxFieldSize);
        this.timer = new Timer();
        this.clicks = 0;
        this.startTimeoutId = null;
        this.isFirstClicked = false;
        this.firstClickedId = null;
        this.state = "stop";
        this.unresolvedCount = fieldSize / 2;
    }

    start() {        
        // this.flipAll();
        // this.startTimeoutId = setTimeout("", Math.sqrt(this.gameField.length) * 1000);
        // this.flipAll();
        this.timer.start();
        this.state = "run";
    }

    end() {
        this.timer.stop();
        this.state = "stop";
    }

    // flipAll() {
    //     for (var i = 0; i < this.gameField.length; i++) {
    //         this.gameField[i].flip();
    //     }
    // }

    cardClickHandler(position) {
        this.clicks++;
        var result = "";
        if (this.isFirstClicked === false) {
            this.isFirstClicked = true;
            this.firstClickedId = this.gameField[position - 1].cardId;
            result = "first";
        } 
        else {
            if (this.firstClickedId === this.gameField[position - 1].cardId) {
                result = "solved";
                this.unresolvedCount--;
            } else {
                result = "second";
            }
            this.isFirstClicked === false;
        }        
        if (this.unresolvedCount <= 0) {
            result = "end";
        }
        return result;
    }

    getScore() {
        return this.gameField.length * 1000 
             - this.clicks * 10
             - Math.floor((this.timer.getCurrentValue() * 10) / 1000);
    }

    static getNewGameField(fieldSize, maxFieldSize) {
        var possibleCards = new Array();
        for (let i = 0; i < maxFieldSize / 2; ++i) {
            possibleCards.push(new Card(i + 1));
        }
        possibleCards = shuffle(possibleCards);

        var gameField = new Array();
        for (let i = 0; i < fieldSize / 2; ++i) {
            gameField.push(new Card(i + 1));
            gameField.push(new Card(i + 1));
        }
        gameField = shuffle(gameField);
        for (let i = 0; i < gameField.length; ++i) {
            gameField[i].cardPosition = i + 1;
        }
        return gameField;
    }
}