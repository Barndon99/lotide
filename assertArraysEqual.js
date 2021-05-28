const eqArrays = function(array, comparedArray) {
  if (array.length !== comparedArray.length) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== comparedArray[i]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(array, comparedArray, expected) {
  if (eqArrays(array, comparedArray) === expected) {
    console.log(`😤😤😤 Assertion Passed ${array} === ${comparedArray}`);
  } else {
    console.log(`💀💀💀 Assertion Failed ${array} !== ${comparedArray}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3, 4], true);
assertArraysEqual([1, 2, 3], [1, "2", 3, 4], false);
assertArraysEqual(["Hello", "world", 3], ["Hello", "world", 3], true);
assertArraysEqual(["Hello", "world", 3], ["hello", "world", 3], false);

