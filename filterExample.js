function getShortMessages(messages) {
    var errorMessage = 'Incorrect input.Array does not have message property', isValid = true;

    if (messages instanceof Array) {
        var filteredMessageObjects = messages.filter(function checkLength(messageObject) {
             if (messageObject.message === undefined)
                 isValid = false;
                 
            return isValid ? messageObject.message.length < 50 : undefined;
        
        });
        var filteredStringMessages = filteredMessageObjects.map(function getStringMessage(messageObject) {
            return (messageObject.message);
        });
        if(isValid)
            return filteredStringMessages;
        else return errorMessage;

    } else {

        return errorMessage;
    }
}

module.exports = getShortMessages;