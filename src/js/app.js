"use strict"

import Card from "./models/card";
import Timer from "./models/timer";
import Game from "./models/game";
import ScoresRepository from "./infrastructure/scoresRepository";
import GameView from "./views/gameView";
import GameController from "./controllers/gameController";
import styles from "./../styles/app.css";

console.log(styles.canvas);


var card = new Card(1);
card.flip();

var timer = new Timer();
timer.start();

var game = new Game(4);
game.start();