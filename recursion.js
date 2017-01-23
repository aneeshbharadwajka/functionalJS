function reduceArray(wordArray, reduceFunction, initialValue) {
    return (function reduceLengthByOne(index, value) {
        if (index > wordArray.length - 1) {
            return value;
        } else {
            return reduceLengthByOne(index + 1, reduceFunction(value, wordArray[index], index, wordArray));
        }
    })(0, initialValue);
}

module.exports = reduceArray;