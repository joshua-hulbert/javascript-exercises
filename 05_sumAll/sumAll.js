const sumAll = function(x, y) {
    let min, max, sum;

    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }

    if (x < y) {
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    }

    sum = max;

    for (; min < max; min++) {
        sum += min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
