function checkUserValidity(suppliedUser) {
  return validUsers.some(function (validUser) {
    return (validUser.id === suppliedUser.id);
  })     
 }

function checkUsers(validUsers, suppliedUsers) {
  return suppliedUsers.every(function (suppliedUser)
  {
    
  });
}


function checkValidUsers(validUsers) {
  return function checkSuppliedUsers(suppliedUsers) {
    return checkUsers(validUsers, suppliedUsers);
  }
}

module.exports = checkValidUsers;