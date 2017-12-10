"use strict"

export default class Card {
    /**
	 * @param {Number} id Id of card
	 */
    constructor(id) {
        this._id = id;
    }

    /**
     * Card id getter property.
     *     
     * @returns {Number} Id of current card
     */
    get id() {
        return this._id;
    }
}