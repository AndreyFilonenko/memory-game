export default class Helpers {

    static getFormattedDateTime(timeSpan) {
        var dt = new Date(timeSpan);

        var dd = dt.getDate();
        if (dd < 10) { dd = "0" + dd; }

        var mm = dt.getMonth() + 1;
        if (mm < 10) { mm = "0" + mm; }

        var yy = dt.getFullYear();
        if (yy < 10) { yy = "0" + yy; }

        var hh = dt.getHours();
        if (hh < 10) { hh = "0" + hh; }

        var min = dt.getMinutes();
        if (min < 10) { min = "0" + min; }

        var ss = dt.getSeconds();
        if (ss < 10) { ss = "0" + ss; }

        return dd + "." + mm + "." + yy + " - " + hh + ":" + min + ":" + ss;
    }

    static getFormattedTime(seconds) {
        var retStr = "";
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

    static shuffle(array) {
        for (let i = array.length - 1; i > 0; --i) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}