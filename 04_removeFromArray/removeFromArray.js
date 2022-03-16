const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++)
    {
        const indexToRemove = array.indexOf(arguments[i]);
        if (indexToRemove >= 0) {
            array.splice(indexToRemove, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
