function countWords(wordArray) {
    return wordArray.reduce(function countOccurrencesofEachWord(wordCountArray, word) {
        wordCountArray[word] = ++wordCountArray[word] || 1;
        return wordCountArray;
    }, {});
}

module.exports = countWords;