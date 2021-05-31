const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array, comparedArray, expected) {
  if (eqArrays(array, comparedArray) === expected) {
    console.log(`😤😤😤 Assertion Passed ${array} === ${comparedArray}`);
  } else {
    console.log(`💀💀💀 Assertion Failed ${array} !== ${comparedArray}`);
  }
};

module.exports = assertArraysEqual;

