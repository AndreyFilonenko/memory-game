export default class Card {
    constructor(id) {
        this.cardId = id;
        this.cardState = "facedown";
        console.log("Card id:" + id);
    }

    flip() {
        if (this.cardState == "facedown") {
            this.cardState = "faceup";
        } else if (this.cardState == "faceup") {
            this.cardState = "facedown";
        }
    }

    found() {
        this.cardState = "found";
    }

    compareTo(otherCard) {
        return (this.cardId == otherCard.cardId);
    }

    draw(gs, pos) {
        if (this.cardState == "facedown") {
            gs.draw("back", pos);
        } else {
            gs.draw(this.cardId, pos);
        }
    }
}