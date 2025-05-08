const convertToCelsius = function(tempF) {

	let celsius = ((tempF) - 32) * 5/9;
	if (Number.isInteger(celsius)) {
		return celsius;
	} else {
		return Math.round(celsius * 1e1) / 1e1;
	}

};

const convertToFahrenheit = function(tempC) {

	let fahrenheit = ((tempC) * 9/5) + 32;
	if (Number.isInteger(fahrenheit)) {
		return fahrenheit;
	} else {
		return Math.round(fahrenheit * 1e1) / 1e1;
	}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
