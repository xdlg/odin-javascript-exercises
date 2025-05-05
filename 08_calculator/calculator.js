const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
	if (x === 0 || x === 1) {
    return 1;
  }

  return x * factorial(x - 1);
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
