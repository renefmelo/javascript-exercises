const sumAll = function(number1, number2) {

	let errorMessage = 'ERROR';

	if (number1 < 0 || number2 < 0) {
		return errorMessage;
	} else if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
		return errorMessage;
	} else if (typeof number1 !== 'number' || typeof number2 !== 'number') {
		return errorMessage;
	}

	let smallNumber = 0;
	let bigNumber = 0;
	if (number1 > number2) {
		smallNumber = number2;
		bigNumber = number1;
	} else {
		smallNumber = number1;
		bigNumber = number2;
	}

	let sum = 0;
	for (smallNumber; smallNumber <= bigNumber; smallNumber++) {
		sum += smallNumber;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
