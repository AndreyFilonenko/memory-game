"use strict"

import Game from "./../models/game";
import GameView from "./../views/gameView";
import ScoresRepository from "./../infrastructure/scoresRepository";
import Helpers from "./../helpers/helpers";

export default class GameController {
    /**
	 * @param {GameView} view GameView instance to inject
	 * @param {ScoresRepository} repo ScoresRepository instance to inject
	 */
    constructor(view, repo) {
        if (view instanceof GameView && repo instanceof ScoresRepository) {
            this._view = view;
            this._repo = repo;
        } else {
            throw new Error("Invalid GameController ctor args.");
        }
        this._game = null;
        this._intervalId = null;
        this._firstClicked = null;
        this._maxFieldSize = 16;
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} maxFieldSize Size of max gamefield size
     */
    setMaxField(maxFieldSize) {
        this._maxFieldSize = maxFieldSize;
    }

    /**
     * Shows the main game menu.
     */
    showMenu() {
        this._game = null;
        this.stopRefresh();
        this._view.renderMenu();
        this._view.bindStartGame(this.startGame.bind(this));
        this._view.bindShowScores(this.showScores.bind(this));
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} fieldSize Size of game field
     */
    startGame(fieldSize) {
        this._game = new Game(fieldSize, this._maxFieldSize); 
        this._view.renderGame(this._game.cardIds);
        this._view.flipAllCards();
        window.setTimeout(() => {
            this._view.flipAllCards();
            this._game.start();
            this._intervalId = window.setInterval(() => {
                this.refreshTime();
            }, 50);
            this._view.enableSuspendButton();
        }, (fieldSize / 8) * 1000);
        this._view.bindShowMenu(this.showMenu.bind(this));
        this._view.bindCardClickHandler(this.cardClickHandler.bind(this));
        this._view.bindSuspendOrResumeGame(this.suspendOrResumeGame.bind(this));
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} position Position of card clicked
     */
    cardClickHandler(position) {
        let result = this._game.cardClickHandler(position);
        window.setTimeout(() => {
            switch (result) {
                case "first":
                    this._firstClicked = position;
                    break;

                case "second":
                    this._view.flipBack(this._firstClicked);
                    this._view.flipBack(position);
                    this.firstClickedId = null;
                    break;

                case "solved":
                    this._view.setSolved(this._firstClicked);
                    this._view.setSolved(position);
                    this.firstClickedId = null;
                    break;

                case "end":
                    this.endGame();
                    break;

                default:
                    break;
            }
        }, 500);
        this.refreshClicks();
    }

    /**
     * Suspend or resume game.
     * 
     * @returns State of game process
     */
    suspendOrResumeGame() {
        this._game.suspendOrResume();
        return this._game.isRun();
    }

    /**
     * Stop the game.
     */
    endGame() {
        this._game.end();
        this.stopRefresh();
        this.showWinScreen();
    }

    /**
     * Stop refresh of game stats in view.
     */
    stopRefresh() {
        if (this._intervalId !== null) {
            clearInterval(this._intervalId);
            this._intervalId = null;
        }
    }

    /**
	 * Refresh the time counter.
	 */
    refreshTime() {
        if (this._game.isRun()) {
            this._view.setValue("time", this._game.timeElapsed);
        }
    }
    
    /**
	 * Refresh the clicks counter.
	 */
    refreshClicks() {
        if (this._game.isRun()) {
            this._view.setValue("clicks", this._game.clicks);
        }
    }

    /**
	 * Show the screen with game results.
	 */
    showWinScreen() {
        let duration = this._game.timeElapsed;
        let score = this._game.score;
        this._view.renderWinScreen(duration, score);
        this._view.bindShowMenu(this.showMenu.bind(this));
        this._view.bindSaveScore(this.saveScore.bind(this));
    }

    /**
	 * Save the game results to scores repo.
	 *
	 * @param {String} nickname Name of player
	 */
    saveScore(nickname) {
        console.log(this._game.score);
        this._repo.insert({
            id: Date.now(),
            name: nickname,
            size: this._game.fieldSize,
            duration: this._game.timeElapsed,
            score: this._game.score            
        });
        this.showScores(this._game.fieldSize);
    }

    /**
	 * Find items with properties matching those on query.
	 *
	 * @param {Number} fieldSize Query to match
	 * @param {String} sortKey Called when the query is done
	 * @param {String} direction Called when the query is done
	 */
    showScores(fieldSize = 16, sortKey = "name", direction = "asc") {
        const scoresBySize = this._repo.getAllBySize(fieldSize);
        const sortedScores = scoresBySize.slice(0).sort(Helpers.compareBy(sortKey, direction));
        this._view.renderScores(fieldSize, sortedScores, sortKey, direction);
        this._view.bindShowMenu(this.showMenu.bind(this));
        this._view.bindShowScoresBySize(this.showScores.bind(this));
        this._view.bindShowSortedScores(this.showScores.bind(this));
    }

    /**
	 * Seed scores repository with fake data for testing.	 
	 */
    setFakeRepoData() {
        let fake = new Array();
        for (let i = 0; i < 10; i++) {
            fake.push({
                id: Date.now(),
                name: "Player" + i,
                size: 16,
                duration: i * 10,
                score: i * 100
            });
        }
        for (let i = 0; i < 15; i++) {
            fake.push({
                id: Date.now(),
                name: "Player" + i,
                size: 36,
                duration: i * 20,
                score: i * 200
            });
        }
        for (let i = 0; i < 5; i++) {
            fake.push({
                id: Date.now(),
                name: "Player" + i,
                size: 64,
                duration: i * 100,
                score: i * 1000
            });
        }
        fake.forEach(f => this._repo.insert(f));
    }
}