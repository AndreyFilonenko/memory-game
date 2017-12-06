"use strict"

import Card from "./card";
import Timer from "./timer";

export default class Game {
    constructor(fieldSize) {
        this.gameField = Game.getNewGameField(fieldSize);
        this.timer = new Timer();
        this.clicks = 0;                
        this.startTimeoutId = null;
        this.isFirstClicked = false;
        this.firstClicked = null;
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

    cardClickHandler(card) {
        this.clicks++;
        if (this.isFirstClicked === false) {
            this.isFirstClicked = true;
            this.firstClicked = card;
            this.gameField[card.cardPosition - 1].flip();
        } else {            
            this.gameField[card.cardPosition - 1].flip();
            if (this.firstClicked.cardId === card.cardId) {
                this.gameField[card.cardPosition - 1].found();
                this.gameField[this.firstClicked.cardPosition - 1].found();
            } else {
                setTimeout(() => {
                    this.gameField[card.cardPosition - 1].flip();
                    this.gameField[this.firstClicked.cardPosition - 1].flip();
                }, 1000);
            }
            this.isFirstClicked === false;
        }
    }

    getScore() {
        return this.gameField.length * 1000 
             - this.clicks * 10
             - Math.floor((this.timer.getCurrentValue() * 10) / 1000);
    }

    static getNewGameField(fieldSize) {
        var gameField = new Array(fieldSize);
        for (let i = 0; i < gameField.length / 2; i++) {
            gameField[i] = new Card(i + 1);
            gameField[i + gameField.length / 2] = new Card(i + 1);
        }
        gameField = gameField.sort(function () {
            return Math.random() - 0.5;
        });
        for (let i = 0; i < gameField.length; ++i) {
            gameField[i].cardPosition = i + 1;
        }
        return gameField;
    }
}