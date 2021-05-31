const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const map = function (array, callback) {
  newArray = [];

  array.forEach(element => newArray.push(callback(element)));

  return newArray;
}

// assertArraysEqual(map([1, 3, 5], (x) => x + 1), [2, 4, 6], true);
// assertArraysEqual(map([1, 3, 5], (x) => x * 2), [2, 6, 10], true);
// assertArraysEqual(map([1, 3, 5], (x) => x > 2), [false, true, true], true);

// const addOne = (x) => {return x + 1};

// console.log(map(words, addOne));

module.exports = map;