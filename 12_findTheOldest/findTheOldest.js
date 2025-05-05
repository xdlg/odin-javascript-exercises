const findTheOldest = function(people) {
  const sorted = people.toSorted((a, b) => {
    function age(person) {
      return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
    }
    
    return age(b) - age(a);
  })

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
