function isDuck(arguments) {
    return Object.prototype.hasOwnProperty.call(arguments, 'quack');
}

function duckCount() {
    var argumentArray = Array.prototype.slice.call(arguments);
    return argumentArray.filter(isDuck).length;
}

module.exports = duckCount;