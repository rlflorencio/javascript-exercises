const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(userInput) {
  const total = userInput.reduce((total, element) => {
    return total + element;
  }, 0);
  return total;
};

const multiply = function(array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
