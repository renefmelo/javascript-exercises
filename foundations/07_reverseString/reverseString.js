const reverseString = function(word) {
	let splitted = word.split('');
	let reversed = ''
	for (let i = 1; i <= word.length; i++) {
		reversed += splitted.at(-i);
	}

	return reversed;
};

// Do not edit below this line
module.exports = reverseString;
