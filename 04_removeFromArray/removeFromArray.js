const removeFromArray = function(array, ...elements) {
  for (element of elements) {
    array = array.filter(x => x !== element);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
