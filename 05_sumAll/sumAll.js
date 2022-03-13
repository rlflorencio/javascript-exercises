const sumAll = function(...numbers) {
	const num1 = numbers[0];
	const num2 = numbers[1];
	let result = 0;

	if ( !Number.isInteger(num1) || !Number.isInteger(num2) ) {
		return "ERROR";
	} else {
		if (num1 < 0 || num2 <0 ){

			return "ERROR";
	
		}else if (num2 > num1){
			for (i=num1; i<=num2; i++) {
				result += i;
			};
		
			return result;
		} else if (num1 > num2) {
			for (i=num2; i<=num1; i++) {
				result += i;
			};
		
			return result;
		}
	}
};

// Do not edit below this line
module.exports = sumAll;
