class RandomIntArrayGenerator {
    constructor(length) {
        this.length = length;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateArray(minRange, maxRange) {
        return Array.from({ length: this.length }, () =>
            this.getRandomInt(minRange, maxRange)
        );
    }
}

module.exports = RandomIntArrayGenerator;
