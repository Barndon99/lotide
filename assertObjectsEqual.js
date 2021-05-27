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

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } //recursively move down through keys which are objects
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  console.log("o1:", object1, "o2:", object2);

  if (eqObjects(object1, object2) === expected) {
    console.log(`😤😤😤 Assertion Passed ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`💀💀💀 Assertion Failed ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: ["2"] };
const ba = { b: ["2"], a: "1" };
assertObjectsEqual(ab, ba, true);