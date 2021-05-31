//initialize a without function to remove elements of an array

//Loop through each element to be removed -> loop through each array and .push any element not being removed to a new array
// # init an empty array


const without = function(array, elementsToRemove) {
  let newArray = [];
  for (let element of array) {
    let addElement = false;
    for (let items of elementsToRemove) {
      if (element === items) {
        addElement = true;
      }
    }
    if (!addElement) newArray.push(element);
  }
  return newArray;
};

// console.log(without([1, "hello", 3, 2], ["hello", 2]));

module.exports = without;
