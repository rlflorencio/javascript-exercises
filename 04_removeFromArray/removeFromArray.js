const removeFromArray = function(...items) {
	const array = items[0];
	return array.filter(val => !items.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
