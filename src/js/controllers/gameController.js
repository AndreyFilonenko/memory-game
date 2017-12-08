"use strict"

import Game from "./../models/game";
import GameView from "./../views/gameView";
import ScoresRepository from "./../infrastructure/scoresRepository";
import Helpers from "./../helpers/helpers";

export default class GameController {
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

    setMaxField(maxFieldSize) {
        this.maxFieldSize = maxFieldSize;
    }

    showMenu() {
        this.game = null;
        this.view.renderMenu();
        this.view.bindStartGame(this.startGame.bind(this));
        this.view.bindShowScores(this.showScores.bind(this));
    }

    startGame(fieldSize) {
        this.game = new Game(fieldSize, this.maxFieldSize); 
        this.view.renderGame(this.game.gameField);
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

    suspendOrResumeGame() {
        this.game.suspendOrResume();
    }

    endGame() {
        this.game.end();
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.showWinScreen();
    }

    refreshTime() {
        if (this.game.state === "run") {
            this.view.setValue("time", this.game.timer.getCurrentValue());
        }
    }

    refreshClicks() {
        if (this.game.state === "run") {
            this.view.setValue("clicks", this.game.clicks);
        }
    }

    showWinScreen() {
        let duration = this.game.timer.getCurrentValue();
        let score = this.game.getScore();
        this.view.renderWinScreen(duration, score);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindSaveScore(this.saveScore.bind(this));
    }

    saveScore(nickname) {
        this.repo.insert({
            id: Date.now(),
            name: nickname,
            size: this.game.gameField.length,
            duration: this.game.timer.getCurrentValue(),
            score: this.game.getScore()
        });
        this.showScores(this.game.gameField.length);
    }

    showScores(fieldSize = 16, sortKey = "name", direction = "asc") {
        const scoresBySize = this.repo.getAllBySize(fieldSize);
        const sortedScores = scoresBySize.slice(0).sort(Helpers.compareBy(sortKey, direction));
        this.view.renderScores(fieldSize, sortedScores, sortKey, direction);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindShowScoresBySize(this.showScores.bind(this));
        this.view.bindShowSortedScores(this.showScores.bind(this));
    }

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