const reverseString = function(stringToReverse) {
    let characterArray = stringToReverse.split('');
    let reversedCharacterArray = characterArray.reverse();
    return reversedCharacterArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
