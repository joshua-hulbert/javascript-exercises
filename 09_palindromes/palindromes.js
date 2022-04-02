const palindromes = function (string) {
    let stringNoPunctuation = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let array = Array.from(stringNoPunctuation);
    array.reverse();
    let reversedString = array.join('');
    return stringNoPunctuation == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
