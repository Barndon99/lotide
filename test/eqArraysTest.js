const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

//Test code
assertEqual(eqArrays([false, 2, "far"], [false, 2, "far"]), true);
assertEqual(eqArrays([false, 3, "far"], [false, 2, "far"]), false);
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);