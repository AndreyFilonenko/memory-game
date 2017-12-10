"use strict"

export default class Helpers {
    /**
     * Static
     * Format datetime to user-friendly string.
     *
     * @param {Number} timeSpan Timespan to generate output string
     *
     * @returns {String} Formatted date and time string in format dd.mm.yy - hh:mm:ss
     */
    static getFormattedDateTime(timeSpan) {
        let dt = new Date(timeSpan);

        let dd = dt.getDate();
        if (dd < 10) { dd = "0" + dd; }

        let mm = dt.getMonth() + 1;
        if (mm < 10) { mm = "0" + mm; }

        let yy = dt.getFullYear();

        let hh = dt.getHours();
        if (hh < 10) { hh = "0" + hh; }

        let min = dt.getMinutes();
        if (min < 10) { min = "0" + min; }

        let ss = dt.getSeconds();
        if (ss < 10) { ss = "0" + ss; }

        return `${dd}.${mm}.${yy} - ${hh}:${min}:${ss}`;
    }

    /**
     * Static
     * Format seconds to user-friendly string.
     *
     * @param {Number} seconds Seconds count to generate output string
     *
     * @returns {String} Formatted time string with minutes and hours, if exists
     */
    static getFormattedTime(seconds) {
        let retStr = "";
        if (seconds < 60) {
            retStr = seconds + " сек.";
        } else if (seconds < 3600) {
            retStr = Math.floor((seconds / 60)) + " мин. " + (seconds % 60) + " сек.";
        } else {
            retStr =
                Math.floor((seconds / 3600)) + " час. "
                + Math.floor((seconds % 3600) / 60) + " мин. "
                + ((seconds % 3600) % 60) + " сек.";
        }
        return retStr;
    }

    /**
     * Static
     * Set array elements to random order.
     *
     * @param {Array} array Array to shuffle
     *
     * @returns {Array} Shuffled array
     */
    static shuffle(array) {
        for (let i = array.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Static
     * Generate the custom comparer to sort function for sorting objects by field.
     *
     * @param {All} key Property to compare
     * @param {All} order Direction to compare
     *
     * @returns {Function(a, b)} Custom comparer func
     */
    static compareBy(key, order = "asc") {
        return function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === "string") ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === "string") ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === "desc") ? (comparison * -1) : comparison
            );
        };
    }
}