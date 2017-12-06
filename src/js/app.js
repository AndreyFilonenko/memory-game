"use strict"

import ScoresRepository from "./infrastructure/scoresRepository";
import GameView from "./views/gameView";
import GameController from "./controllers/gameController";
import styles from "./../styles/sass/app.scss";

console.log(styles.canvas);

var view = new GameView();

var repo = new ScoresRepository("pairs-memory-game");

var controller = new GameController(view, repo);

window.addEventListener("load", controller.showMenu());