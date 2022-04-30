const palindromes = function (str) {
	let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
	let reversed = cleanStr.split("").reverse().join("");
	return cleanStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
