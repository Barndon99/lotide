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

const takeUntil = function(array, callback) {
  let slice = [];

  for (let element of array) {
    if (callback(element) === false) {
      slice.push(element);
    } else {
      break;
    }
  }

  return slice;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil([1, 2, 4, 5, 6, 8], (x) => x > 6), [1, 2, 4, 5, 6], true);
assertArraysEqual(takeUntil(["hi", "there", " ", "my", "friend"], (x) => x === " "), ["hi", "there"], true);
