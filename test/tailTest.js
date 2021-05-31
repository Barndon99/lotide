
const index = require('../index');
const assert = require('chai').assert;

//Test code
// let array = [1, 4, 8, 9, 2, 34];
// assertEqual(tail(array).length, (array.length - 1));
// let array1 = ['hello', "hit", "buenos"];
// assertEqual(tail(array1).length, 2);

describe("#tail", () => {
  it("Should return everything but the first index of an array", () => {
    assert.deepEqual(index.tail([1, 4, 5, 6, 7]), [4, 5, 6, 7]);
  });
  it("Should return an empty array if the input is an empty array", () => {
    assert.deepEqual(index.tail([]), []);
  });
});