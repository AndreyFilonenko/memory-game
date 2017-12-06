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
    }

    showMenu() {        
        this.game = null;
        this.view.renderMenu();
        this.view.bindStartGame(this.startGame.bind(this));
        this.view.bindShowScores(this.showScores.bind(this));
    }

    startGame(fieldSize) {
        this.game = new Game(fieldSize);
        this.view.flipAllCards();
        // this.startTimeoutId = setTimeout("", Math.sqrt(fieldSize) * 1000);
        // this.view.flipAllCards();
        this.game.start();
        this.view.renderGame(this.game.gameField);
        this.view.bindShowMenu(this.showMenu.bind(this));
    }

    refreshStats() {
        this.view.setValue("clicks", this.game.clicks);
        this.view.setValue("time", this.game.timer.getCurrentValue());
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