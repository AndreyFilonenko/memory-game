"use strict"

import Card from "./../models/card";
import Timer from "./../models/timer";
import Game from "./../models/game";
import ScoresRepository from "./../infrastructure/scoresRepository";
import GameView from "./../views/gameView";

export default class GameController {
    constructor(game, view, repo) {
        this.game = game;
        this.view = view;
        this.repo = repo;
    }

    
}