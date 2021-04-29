const reverseString = function(string) {
	let list = [];
	for (let i = string.length - 1; i >= 0; i--) {
		list.push(string[i]);
	}
	return list.join("");
}

module.exports = reverseString
