function repeat(operation, maxNumberOfTimes) {
    var count = 0;
    while (count < maxNumberOfTimes) {
        operation();
        count++;
    }
}

module.exports = repeat; 