const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle.js');
//Test code
assertArraysEqual(middle([]), [], true);
assertArraysEqual(middle(["hello", "hi", "hi", "what", "are"]), ["hi"], true);
assertArraysEqual(middle([1, 3]), [], true);
assertArraysEqual(middle([1, 3, 6, 8, 7, 8]), [6, 8], true);