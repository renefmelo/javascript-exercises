const fibonacci = function(numero) {
	let fibo = [1, 1];
	let i = 0;
	numero = Number(numero);
	if (numero === 0) {
		return 0;
	} else if (numero < 0) {
		return "OOPS";
	}

	while (fibo.length < numero) {
		fibo.push(fibo[i] + fibo[i + 1])
		i++
	}

	return fibo[numero-1];
};

// Do not edit below this line
module.exports = fibonacci;
