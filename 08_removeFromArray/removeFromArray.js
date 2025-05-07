const removeFromArray = function(arreio, argument1, argument2) {


	for (let i = 0; i < arreio.length; i++) {
		for (let j = 1; j < arguments.length; j++){

			if (arreio.at(i) === arguments[j]) {
				arreio.splice(i, 1);
				i--
			}
		}
	}

	return arreio;
};

// Do not edit below this line
module.exports = removeFromArray;
