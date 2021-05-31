const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays.js');

//Test code
assertArraysEqual([1, 2, 3], [1, 2, 3, 4], true);
assertArraysEqual([1, 2, 3], [1, "2", 3, 4], false);
assertArraysEqual(["Hello", "world", 3], ["Hello", "world", 3], true);
assertArraysEqual(["Hello", "world", 3], ["hello", "world", 3], false);