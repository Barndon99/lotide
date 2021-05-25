const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let result = [];
  if (array.length === 0 || array.length === 1) {
    return result;
  } else if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      result.push(array[i]);
    }
  } return result;
};

let array = [1, 4, 8, 9, 2, 34];
assertEqual(tail(array).length, (array.length - 1));