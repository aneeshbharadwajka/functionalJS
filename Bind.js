function ConsoleLogger(namespace) {
    return console.log.bind(console, namespace);
};

module.exports = ConsoleLogger;