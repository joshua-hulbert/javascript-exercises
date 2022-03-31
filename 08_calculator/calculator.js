const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((total, current) => {
    return total + current;
   }, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let factorial = 1;
  for (let i = x; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
