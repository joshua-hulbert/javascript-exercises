const fibonacci = function(x) {
    let fibonacciNumCurrent = 0;
    let fibonacciNumLast = 1;
    let fibonacciNumLastLast= 0;

    if (typeof x === "string") {
        x = parseInt(x);
    }

    if (x < 0) {
        return "OOPS";
    } else if (x == 1) {
        return 1;
    }

    while (x-- > 1) {
        fibonacciNumCurrent = fibonacciNumLast + fibonacciNumLastLast;
        fibonacciNumLastLast = fibonacciNumLast;
        fibonacciNumLast = fibonacciNumCurrent;
    }

    return fibonacciNumCurrent;
};

// Do not edit below this line
module.exports = fibonacci;
