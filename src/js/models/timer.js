export default class Timer {
    constructor() {
        this.value = 0;
        this.state = "stopped";
        this.startTime = null;        
        console.log("Timer");
    }

    start() {
        if (this.state = "stopped") {
            this.state = "started";
            this.startTime = Date.now();
        }
    }

    stop() {
        if (this.state = "started") {
            this.state = "stopped";
            this.value += Math.round((Date.now() - this.startTime) / 1000);
            this.startTime = null;
        }
    }

    getCurrentValue() {
        if (this.state = "started") {
            return Math.round((Date.now() - this.startTime) / 1000);
        } else {
            return this.value;
        }
    }
}