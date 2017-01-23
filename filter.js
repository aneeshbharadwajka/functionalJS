function getShortMessages(messages) {
    var filteredMessageObjects = messages.filter(function checkLength(messageObject) {
        return (messageObject.message.length < 50);
    });
    var filteredStringMessages = filteredMessageObjects.map(function getStringMessage(messageObject) {
        return (messageObject.message);
    });
    return filteredStringMessages;
}
module.exports = getShortMessages;