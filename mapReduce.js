function arrayMap(inputArray, operation) {
    var accum = [];
    var newArray = inputArray.reduce(function applyReduceFunction(accum, currValue, currIndex, inputArray) {
        accum.push(operation(currValue));
        return accum;
    }, []);
    return newArray;
}
module.exports = arrayMap;