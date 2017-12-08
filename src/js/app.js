"use strict"

import ScoresRepository from "./infrastructure/scoresRepository";
import GameView from "./views/gameView";
import GameController from "./controllers/gameController";
import styles from "./../styles/sass/app.scss";

console.log(styles.container);

const view = new GameView();

const repo = new ScoresRepository("pairs-memory-game");

const controller = new GameController(view, repo);
controller.setMaxField(64);
//controller.setFakeRepoData();

window.addEventListener("load", controller.showMenu());