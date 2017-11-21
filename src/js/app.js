import Card from "./models/card";
import Game from "./models/game";
import Timer from "./models/timer";
import styles from "./../styles/app.css";

console.log(styles.canvas);


var card = new Card(1);
card.flip();

var timer = new Timer();
timer.start();

var game = new Game(4);
game.start();