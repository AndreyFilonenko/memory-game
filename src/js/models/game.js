"use strict"

import Card from "./card";
import Timer from "./timer";
import Helpers from "./../helpers/helpers";

export default class Game {
    /**
	 * @param {Number} fieldSize Size of game field
	 * @param {Number} maxFieldSize Max quantity of card to generete field
	 */
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

    /**
     * Start the game.
     */
    start() {
        this.timer.start();
        this.state = "run";
    }

    /**
     *Suspend or resume game.
     */
    suspendOrResume() {
        if (this.state === "run") {
            this.timer.stop();
            this.state = "suspended";
        } else if (this.state === "suspended") {
            this.timer.start();
            this.state = "run";
        }
    }

    /**
     * Stop the game.
     */
    end() {
        this.timer.stop();
        this.state = "stop";
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} position Position of card clicked
     * 
     * @returns {String} State of current clicked card
     */
    cardClickHandler(position) {
        this.clicks++;
        let result = "";
        if (this.isFirstClicked === false) {
            this.isFirstClicked = true;
            this.firstClickedId = this.gameField[position - 1].id;
            result = "first";
        } 
        else {
            if (this.firstClickedId === this.gameField[position - 1].id) {
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

    /**
     * Gamescore getter property.
     *     
     * @returns {Number} Current game score
     */
    get score() {
        if (this.state === "stop") {
            return this.gameField.length * 1000 
            - this.clicks * 10
            - Math.floor((this.timer.value * 10) / 1000);
        }
    }

    /**
     * Fieldsize getter property.
     *     
     * @returns {Number} Size of current game field
     */
    get fieldSize() {
        return this.gameField.length;
    }

    /** 
     * Static
     * Generate the shuffled array of cards.
     *
     * @param {Number} fieldSize Number of cards to generate
     * @param {Number} maxFieldSize Max cards quantity in /img/{path} folder 
     *
     * @returns {Array} Shuffled array with cards
     */
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
        return gameField;
    }
}