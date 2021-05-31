// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
const index = require('../index');
const assert = require("chai").assert;

//Test code
// assertArraysEqual(middle([]), [], true);
// assertArraysEqual(middle(["hello", "hi", "hi", "what", "are"]), ["hi"], true);
// assertArraysEqual(middle([1, 3]), [], true);
// assertArraysEqual(middle([1, 3, 6, 8, 7, 8]), [6, 8], true);

describe("#middle", () => {
  it("should return undefined if the array is empty", () => {
    assert.deepEqual(index.middle([]), []);
  });
  it("should return the middle of an array", () => {
    assert.deepEqual(index.middle([1, 4, 6, 7, 8]), [6]);
  });
  it("should return both middle numbers if the array length is even", () => {
    assert.deepEqual(index.middle([1, 4, 5, 2]), [4, 5]);
  });
});