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

const middle = function(array) {
  let middleOfArray = "";
  let numToReturn = [];
  // if the length of the array is 0, 1, or 2 then return an empty array
  if (array.length === 1 || array.length === 0 || array.length === 2) {
    return [];
  }
  // if the array is odd, take the middle value. If even take the two central values
  if (array.length % 2 !== 0) {
    middleOfArray = Math.ceil(array.length / 2) - 1;
    numToReturn.push(array[middleOfArray]);
    console.log("middleOfArray", middleOfArray, "numToReturn", numToReturn);
  } else {
    middleOfArray = Math.ceil(array.length / 2) - 1;
    numToReturn.push(array[middleOfArray], array[middleOfArray + 1]);
  }
  // return the middle values
  return numToReturn;
};

console.log(middle([]));
console.log(middle(["hello", "hi", "hi", "what", "are"]));
console.log(middle([1, 3]));
console.log(middle([1, 3, 6, 8, 7, 8]));
