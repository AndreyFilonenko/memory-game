"use strict"

// import Card from "./../models/card";
// import Timer from "./../models/timer";
// import Game from "./../models/game";
// import ScoresRepository from "./../infrastructure/scoresRepository";

export default class GameView {
    constructor(skinPath) {
        this.skinPath = skinPath;

        this.container = document.querySelector("#appcontainer");
        let game = document.createElement("div");
        game.id = "mg";
        game.className = "mg";
        this.container.appendChild(game);

    }

    renderTimerPanel() {

    }
}