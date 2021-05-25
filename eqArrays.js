const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array, array1) {
  let isTrue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array1[i]) {
      isTrue = true;
    } else if (array[i] !== array1[i]) {
      isTrue = false;
    }
  } return isTrue;
};

assertEqual(eqArrays([false, 2, "far"], [false, 2, "far"]), true);