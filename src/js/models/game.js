"use strict"

import Card from "./card";
import Timer from "./timer";
import Helpers from "./../helpers/helpers";

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
        this.timer.start();
        this.state = "run";
    }

    suspendOrResume() {
        if (this.state === "run") {
            this.timer.stop();
            this.state = "suspended";
        } else if (this.state === "suspended") {
            this.timer.start();
            this.state = "run";
        }
    }

    end() {
        this.timer.stop();
        this.state = "stop";
    }

    cardClickHandler(position) {
        this.clicks++;
        let result = "";
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
            this.isFirstClicked = false;
            this.firstClickedId = null;
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
        let possibleCards = new Array();
        for (let i = 0; i < maxFieldSize / 2; ++i) {
            possibleCards.push(new Card(i + 1));
        }
        Helpers.shuffle(possibleCards);

        let gameField = new Array();
        for (let i = 0; i < fieldSize / 2; ++i) {
            gameField.push(possibleCards[i]);
            gameField.push(possibleCards[i]);
        }
        gameField = Helpers.shuffle(gameField);
        for (let i = 0; i < gameField.length; ++i) {
            gameField[i].cardPosition = i + 1;
        }
        return gameField;
    }
}