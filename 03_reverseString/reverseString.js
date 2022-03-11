const reverseString = function(input) {
	const len = input.length;
	let output = "";
	let ltr = "";
	for (i = 0; i <= len; i++){
		ltr = input.slice((len - (i + 1)), (len - i));
		output += ltr;
	}
	return output

};

// Do not edit below this line
module.exports = reverseString;
