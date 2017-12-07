"use strict"

// import Card from "./../models/card";
// import Timer from "./../models/timer";
import Game from "./../models/game";
import GameView from "./../views/gameView";
import ScoresRepository from "./../infrastructure/scoresRepository";

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
        this.game.start();
        this.view.renderGame(this.game.gameField);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindCardClickHandler(this.cardClickHandler.bind(this));
    }

    cardClickHandler(position) {
        var result = this.game.cardClickHandler(position);
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
        this.refreshClicks();
    }

    endGame() {
        this.game.end();
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.showWinScreen();
    }

    refreshTime() {
        if (this.game.state == "run") {
            this.view.setValue("time", this.game.timer.getCurrentValue());
        }
    }

    refreshClicks() {
        if (this.game.state == "run") {
            this.view.setValue("clicks", this.game.clicks);
        }
    }

    showWinScreen() {
        var duration = this.game.timer.getCurrentValue();
        var score = this.game.getScore();
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
        this.showMenu();
    }
    
    showScores(fieldSize = 16) {
        var scoresBySize = this.repo.getAllBySize(fieldSize);
        this.view.renderScores(fieldSize, scoresBySize);
        this.view.bindShowMenu(this.showMenu.bind(this));
        this.view.bindShowScoresBySize(this.showScores.bind(this));
    }
}