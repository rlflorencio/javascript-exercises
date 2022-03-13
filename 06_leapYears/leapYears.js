const leapYears = function(year) {
	let intYear = parseInt(year);
	if ( intYear % 4 === 0) {

		if (intYear % 100 !== 0) {
			return true
		} else if (intYear % 100 === 0 && intYear % 400 === 0) {
			return true
		} else {
			return false
		}

	} else {
		return false;
	}

};

// Do not edit below this line
module.exports = leapYears;
