function getShortMessages(messages) {
    if (messages instanceof Array === true) {
        var filteredMessageObjects = messages.filter(function checkLength(messageObject) {
            return (messageObject.message.length < 50);
        });
        var filteredStringMessages = filteredMessageObjects.map(function getStringMessage(messageObject) {
            return (messageObject.message);
        });
        return filteredStringMessages;

    } else {
        var errorMessage = 'Incorrect input.Array does not have message property';
        return errorMessage;
    }
}

module.exports = getShortMessages;