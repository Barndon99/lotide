const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([false, 2, "far"], [false, 2, "far"]), true);