const eqArrays = require('./eqArrays.js');

const assertArraysEqual = require('./assertArraysEqual.js');

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
  } else {
    middleOfArray = Math.ceil(array.length / 2) - 1;
    numToReturn.push(array[middleOfArray], array[middleOfArray + 1]);
  }
  // return the middle values
  return numToReturn;
};

module.exports = middle;

