const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	//if (numbers.length === 0) {
	//	return 0;
	//}

	return numbers.reduce((accumulator, currentElement) => accumulator + currentElement, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((accumulator, currentElement) => accumulator * currentElement, 1)
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	let result = number;
	if (number === 0 || number === 1) {
		return 1;
	} else {
		while (number > 1) {
			number--;
			result = result * number;
		}
		return result;
	}
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
