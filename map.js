const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  newArray = [];

  array.forEach(element => newArray.push(callback(element)));

  return newArray;
}

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

assertArraysEqual(map([1, 3, 5], (x) => x + 1), [2, 4, 6], true);
assertArraysEqual(map([1, 3, 5], (x) => x * 2), [2, 6, 10], true);
assertArraysEqual(map([1, 3, 5], (x) => x > 2), [false, true, true], true);

// const addOne = (x) => {return x + 1};

// console.log(map(words, addOne));