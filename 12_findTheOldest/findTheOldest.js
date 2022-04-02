const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldest;
    let age;

    people.forEach(person => {
        if ("yearOfDeath" in person) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let year = new Date().getFullYear();
            age = year - person.yearOfBirth;
        }
        
        if (age > oldestAge) {
            oldestAge = age;
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
