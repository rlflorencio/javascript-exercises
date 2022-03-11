const repeatString = function(text, num) {
	let outputString = "";
	if (num < 0 ) {
		return "ERROR"
	} else {
		for (num; num>0; num--) {
			outputString += text;
		}
		return outputString
	}

};

// Do not edit below this line
module.exports = repeatString;
