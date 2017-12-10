/** 
 *  Application entry point
 *  Create instances of view, repo and controller, then load the game
 */

"use strict"

import ScoresRepository from "./infrastructure/scoresRepository";
import GameView from "./views/gameView";
import GameController from "./controllers/gameController";
import styles from "./../styles/sass/app.scss";

// Only for webpack style loader
console.log(styles.container);

/** 
 *  @type {GameView}
 */
const view = new GameView();

/** 
 *  @type {ScoresRepository}
 */
const repo = new ScoresRepository("pairs-memory-game");

/** 
 *  @type {GameController}
 */
const controller = new GameController(view, repo);

// Set max cards quantity, currently 64
controller.setMaxField(64);

// Uncomment this line to seed fake data in repo 
//controller.setFakeRepoData();

// Start app action when window loaded
window.addEventListener("load", controller.showMenu());