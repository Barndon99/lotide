const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  console.log("o1:", object1, "o2:", object2);

  if (eqObjects(object1, object2) === expected) {
    console.log(`😤😤😤 Assertion Passed ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`💀💀💀 Assertion Failed ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// const ab = { a: "1", b: ["2"] };
// const ba = { b: ["2"], a: "1" };
// assertObjectsEqual(ab, ba, true);

module.exports = assertObjectsEqual;


