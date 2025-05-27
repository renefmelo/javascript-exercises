const palindromes = function (sentence) {
	let treatedSentence = sentence.toLowerCase().replace(/[^0-9a-z]/g, '');
	let charArray = [...treatedSentence];
	let joinedArray = charArray.reverse().join("");
	if (joinedArray === treatedSentence) {
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = palindromes;
