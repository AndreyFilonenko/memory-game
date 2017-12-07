"use strict"

export default class Card {
    constructor(id) {
        this.cardId = id;
        this.cardState = "facedown";
        this.cardPosition = null;
    }
}