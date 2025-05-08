const repeatString = function(word, number) {

	let phrase = '';
	for (let i = 0; i < number; i++) {
		phrase += word;
	}

	return phrase;
};

repeatString('mamma', 3);
// Do not edit below this line
module.exports = repeatString;
