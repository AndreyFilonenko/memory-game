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
            this.view = view;
            this.repo = repo;
        } else {
            throw new Error("Invalid GameController ctor args.");
        }
        this.game = null;
        this.intervalId = null;
        this.firstClicked = null;
        this.maxFieldSize = 16;
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} maxFieldSize Size of max gamefield size
     */
    setMaxField(maxFieldSize) {
        this.maxFieldSize = maxFieldSize;
    }

    /**
     * Shows the main game menu.
     */
    showMenu() {
        this.game = null;
        this.view.renderMenu();
        this.view.bindStartGame(this.startGame.bind(this));
        this.view.bindShowScores(this.showScores.bind(this));
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} fieldSize Size of game field
     */
    startGame(fieldSize) {
        this.game = new Game(fieldSize, this.maxFieldSize); 
        this.view.renderGame(this.game.gameField.map((x) => x.id));
        this.view.flipAllCards();
        window.setTimeout(() => {
            this.view.flipAllCards();
            this.game.start();
            this.intervalId = window.setInterval(() => {
                this.refreshTime();
            }, 50);
            this.view.enableSuspendButton();
        }, (fieldSize / 8) * 1000);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindCardClickHandler(this.cardClickHandler.bind(this));
        this.view.bindSuspendOrResumeGame(this.suspendOrResumeGame.bind(this));
    }

    /**
     * Handle the click event on selected card.
     *
     * @param {Number} position Position of card clicked
     */
    cardClickHandler(position) {
        let result = this.game.cardClickHandler(position);
        window.setTimeout(() => {
            switch (result) {
                case "first":
                    this.firstClicked = position;
                    break;

                case "second":
                    this.view.flipBack(this.firstClicked);
                    this.view.flipBack(position);
                    this.firstClickedId = null;
                    break;

                case "solved":
                    this.view.setSolved(this.firstClicked);
                    this.view.setSolved(position);
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
     *Suspend or resume game.
     */
    suspendOrResumeGame() {
        this.game.suspendOrResume();
    }

    /**
     * Stop the game.
     */
    endGame() {
        this.game.end();
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.showWinScreen();
    }

    /**
	 * Refresh the time counter.
	 */
    refreshTime() {
        if (this.game.state === "run") {
            this.view.setValue("time", this.game.timer.value);
        }
    }
    
    /**
	 * Refresh the clicks counter.
	 */
    refreshClicks() {
        if (this.game.state === "run") {
            this.view.setValue("clicks", this.game.clicks);
        }
    }

    /**
	 * Show the screen with game results.
	 */
    showWinScreen() {
        let duration = this.game.timer.value;
        let score = this.game.score;
        this.view.renderWinScreen(duration, score);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindSaveScore(this.saveScore.bind(this));
    }

    /**
	 * Save the game results to scores repo.
	 *
	 * @param {String} nickname Name of player
	 */
    saveScore(nickname) {
        this.repo.insert({
            id: Date.now(),
            name: nickname,
            size: this.game.fieldSize,
            duration: this.game.timer.value,
            score: this.game.score
        });
        this.showScores(this.game.fieldSize);
    }

    /**
	 * Find items with properties matching those on query.
	 *
	 * @param {Number} fieldSize Query to match
	 * @param {String} sortKey Called when the query is done
	 * @param {String} direction Called when the query is done
	 */
    showScores(fieldSize = 16, sortKey = "name", direction = "asc") {
        const scoresBySize = this.repo.getAllBySize(fieldSize);
        const sortedScores = scoresBySize.slice(0).sort(Helpers.compareBy(sortKey, direction));
        this.view.renderScores(fieldSize, sortedScores, sortKey, direction);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindShowScoresBySize(this.showScores.bind(this));
        this.view.bindShowSortedScores(this.showScores.bind(this));
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
        for (let i = 0; i < fake.length; i++) {
            this.repo.insert(fake[i]);
        }
    }
}