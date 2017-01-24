function toUpperCase(inputString){
  if('string' === typeof inputString.toLowerCase()) {
    return inputString.toUpperCase();
  }else {
    console.log('Please enter a valid input');
  }
    
}

module.exports = toUpperCase;