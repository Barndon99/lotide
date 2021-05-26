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

const assertArraysEqual = function(array, comparedArray, expected) {
  if (eqArrays(array, comparedArray) === expected) {
    console.log(`😤😤😤 Assertion Passed ${array} === ${comparedArray}`);
  } else {
    console.log(`💀💀💀 Assertion Failed ${array} !== ${comparedArray}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (const letters of sentence) {
    if (letters !== " " && !results[letters]) {
      results[letters] = [i];
      i++;
    } else if (results[letters]) {
      results[letters].push(i);
      i++;
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3], true);
assertArraysEqual(letterPositions("hello").e, [1], true);
assertArraysEqual(letterPositions("hello").h, [0], true);