const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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

// assertArraysEqual(letterPositions("hello").l, [2, 3], true);
// assertArraysEqual(letterPositions("hello").e, [1], true);
// assertArraysEqual(letterPositions("hello").h, [0], true);

module.exports = letterPositions;