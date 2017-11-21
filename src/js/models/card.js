export default class Card {
    constructor(id) {
        this.cardId = id;
        this.cardState = "facedown";
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

    getCardIdByState() {
        if (this.cardState == "facedown") {
            return 0;
        } else {
            return this.cardId;
        }
    }
}