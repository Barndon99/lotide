const assertEqual = require('./assertEqual');

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

module.exports = tail;