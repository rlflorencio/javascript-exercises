const fibonacci = function(n) {
	let first = 0;
	let last = 1;
	let fibo = 0;

	if (n < 0){
		return "OOPS";
	};
	if (n === 1){
		return fibo = 1;
	};

	if (!(typeof n === "number")) {
		n = parseInt(n);
		if (n === 1) {
			return fibo = 1;
		}
		for (let i = 1; i < n; i++) {
			fibo = first + last;
			first = last;
			last = fibo;
		};
		return fibo;
	};
	
	for (let i = 1; i < n; i++) {
		fibo = first + last;
		first = last;
		last = fibo;
	};
	return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
