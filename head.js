const assertEqual = require("./assertEqual");

const head = function (array) {
  if (array === []) {
    return undefined;
  } else if (array.length === 1) {
    return array[0];
  } else if (array.length > 1) {
    return array[0];
  }
};

module.exports = head;