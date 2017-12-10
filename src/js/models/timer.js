"use strict"

export default class Timer {
    /**
	 * Timer ctor without params
	 */
    constructor() {
        this._value = 0;
        this._state = "stopped";
        this._startTime = null;
    }

    /**
	 * Start the timer
	 */
    start() {
        if (this._state === "stopped") {
            this._state = "started";
            this._startTime = Date.now();
        }
    }

    /**
	 * Stop the timer
	 */
    stop() {
        if (this._state === "started") {
            this._state = "stopped";
            this._value += Math.round((Date.now() - this._startTime) / 1000);
            this._startTime = null;
        }
    }

    /**
     * Current timer value getter property.
     *     
     * @returns {Number} Current value of timer
     */
    get value() {
        if (this._state === "started") {
            return this._value + Math.round((Date.now() - this._startTime) / 1000);
        } else {
            return this._value;
        }
    }
}