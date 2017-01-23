var slice = Array.prototype.slice;

function ConsoleLogger(namespace) {
    return function ConsoleLog(){
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
    };
}
module.exports = ConsoleLogger;