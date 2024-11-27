const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  return array.reduce((oldest, currentOldest) => {
    const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentPerson = getAge(
      currentOldest.yearOfBirth,
      currentOldest.yearOfDeath
    );
    console.log(oldest);

    return oldestPerson < currentPerson ? currentOldest : oldest;
  });
};

function getAge(birth, death) {
  if (!death) {
    death = new Date();
  }

  return death - birth;
}

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
