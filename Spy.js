function Spy(target, method) {
    var spy = { count: 0 };
    var oldFunction = target[method];
    target[method] = function () {
        spy.count++;
        console.log(arguments);
        return oldFunction.apply(target, arguments);
    }
    return spy;
}

module.exports = Spy;

