function checkValidUsers(validUsers) {
    return function checkSuppliedUsers(suppliedUsers) {
        return suppliedUsers.every(function checkUserValidity(suppliedUser) {
            return validUsers.some(function compareUserId(validUser) {
                return (validUser.id === suppliedUser.id);
            });
        });
    }
}

module.exports = checkValidUsers;