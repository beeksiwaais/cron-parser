class OutOfTimeRangeError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "OutOfTimeRangeError"; // (2)
    }
}

module.exports = OutOfTimeRangeError;