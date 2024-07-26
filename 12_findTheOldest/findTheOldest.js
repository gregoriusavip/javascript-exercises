const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    if (!("yearOfDeath" in oldestPerson)) {
      oldestPerson.yearOfDeath = new Date().getFullYear();
    }
    if (!("yearOfDeath" in currentPerson)) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }
    const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
