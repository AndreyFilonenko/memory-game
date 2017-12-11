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
        this._gameField = Game.getNewGameField(fieldSize, maxFieldSize);
        this._timer = new Timer();
        this._clicks = 0;
        this._isFirstClicked = false;
        this._firstClickedId = null;
        this._state = "stop";
        this._unresolvedCount = fieldSize / 2;
    }

    /**
     * Start the game.
     */
    start() {
        this._timer.start();
        this._state = "run";
    }

    /**
     * Suspend or resume game.
     * 
     * @returns {Boolean} State of game process
     */
    suspendOrResume() {
        let isPaused;
        if (this._state === "run") {
            this._timer.stop();
            this._state = "suspended";
            isPaused = true;
        } else if (this._state === "suspended") {
            this._timer.start();
            this._state = "run";
            isPaused = false;
        }
        return isPaused;
    }

    /**
     * Stop the game.
     */
    end() {
        this._timer.stop();
        this._state = "stop";
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} position Position of card clicked
     * 
     * @returns {String} State of current clicked card
     */
    cardClickHandler(position) {
        this._clicks++;
        let result = "";
        if (this._isFirstClicked === false) {
            this._isFirstClicked = true;
            this._firstClickedId = this._gameField[position - 1].id;
            result = "first";
        } 
        else {
            if (this._firstClickedId === this._gameField[position - 1].id) {
                result = "solved";
                this._unresolvedCount--;
            } else {
                result = "second";
            }
            this._isFirstClicked = false;
            this._firstClickedId = null;
        }        
        if (this._unresolvedCount <= 0) {
            result = "end";
        }
        return result;
    }

    /**
     * Determines game running status.
     *     
     * @returns {Boolean} True if game run, else in all other cases
     */
    isRun() {
        return this._state === "run";
    }

    /**
     * Card id's array getter property.
     *     
     * @returns {Array} Array with gamefield cards id's
     */
    get cardIds() {
        return this._gameField.map(x => x.id);
    }

    /**
     * Gamescore getter property.
     *     
     * @returns {Number} Current game score
     */
    get score() {
        if (this._state === "stop") {
            return this._gameField.length * 100 
                - this._clicks * 10
                - Math.floor((this._timer.value * 10) / 1000);
        }
    }

    /**
     * Fieldsize getter property.
     *     
     * @returns {Number} Size of current game field
     */
    get fieldSize() {
        return this._gameField.length;
    }

    /**
     * Elapsed time getter property.
     *     
     * @returns {Number} Time from the beginning of the game
     */
    get timeElapsed() {
        return this._timer.value;
    }

    /**
     * Clicks getter property.
     *     
     * @returns {Number} Clicks from the beginning of the game
     */
    get clicks() {
        return this._clicks;
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