class GuessingGame {
    constructor() {
        this.max
        this.min
        this.middle 

    }

    findMiddle() {
        this.middle = Math.round((this.max-this.min)/2)+this.min
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.findMiddle()
    }

    guess() {
        return this.middle
    }

    lower() {
        this.max = this.middle
        this.findMiddle()
    }

    greater() {
        this.min = this.middle
        this.findMiddle()
    }
}

module.exports = GuessingGame;
