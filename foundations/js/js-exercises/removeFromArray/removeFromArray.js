const removeFromArray = function(array, item1, item2, item3, item4) {
	if (item1 !== undefined && array.indexOf(item1) !== -1) array.splice(array.indexOf(item1), 1);
	if (item2 !== undefined && array.indexOf(item2) !== -1) array.splice(array.indexOf(item2), 1);
	if (item3 !== undefined && array.indexOf(item3) !== -1) array.splice(array.indexOf(item3), 1);
	if (item4 !== undefined && array.indexOf(item4) !== -1) array.splice(array.indexOf(item4), 1);
	return array;
}

module.exports = removeFromArray
