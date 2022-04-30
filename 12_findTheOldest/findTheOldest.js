const findTheOldest = function(people) {
	const calcAge = function(obj) {
		if (obj.yearOfDeath === undefined) {
			obj.yearOfDeath = new Date().getFullYear();
			obj.age = obj.yearOfDeath - obj.yearOfBirth;
		};
		obj.age = obj.yearOfDeath - obj.yearOfBirth;
	};
	
	people.forEach(calcAge);

	const oldest = people.sort(function(a,b) {
		const first = a.age;
		const last = b.age;

		if (first>last) {
			return -1;
		} else {
			return 1;
		}
	});

	return oldest[0];
	
};

// Do not edit below this line
module.exports = findTheOldest;
