const findTheOldest = function(people) {
	let oldestAge = 0;
	let oldestPerson = {};
	people.forEach((person) => {
		if (Object.hasOwn(person, "yearOfDeath")) {
			let personAge = person.yearOfDeath - person.yearOfBirth;
			if (personAge > oldestAge) {
				oldestAge = personAge;
				oldestPerson = person;
			}
		} else {
			let yearNow = new Date().getFullYear();
			let personAge = yearNow - person.yearOfBirth;
			if (personAge > oldestAge) {
				oldestAge = personAge;
				oldestPerson = person;
			}
		}
	})
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
