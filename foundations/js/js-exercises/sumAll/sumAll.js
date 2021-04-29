const sumAll = function(a, b) {
	if (a < 0 || b < 0) return "ERROR";				//returns ERROR with negative numbers
	if (a !== +a || b !== +b) return "ERROR"	//returns ERROR with non-number parameters

	//works with larger number first
	if (a > b) {
		min = b; max = a;
	}
	else {
		min = a; max = b;
	}

	let sum = 0;
	for (min; min <= max; min++) {
		sum += min;
	}
	return sum;
}

module.exports = sumAll
