const head = function (array) {
  if (array === []) {
    return undefined;
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length > 1) {
    return array[0];
  }
}



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5]), 5);
assertEqual(head([]));