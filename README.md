# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: checks if arrays are equal
* `function2(assertEqual)`: checks if two values are equal, cannot compare objects
* `function3(assertObjectsEqual)`: checks if two objects are equal
* `function4(countLetters)`: counts the letters in a string
* `function5(countOnly)`: counts the instances of a certain char in a string
* `function6(eqArrays)`: compares two arrays for equality
* `function7(eqObects)`: compares two objects for equality
* `function8(findKey)`: checks if a key is present and where
* `function9(findKeyByValue)`: looks for a defined key
* `function10(head)`: returns the first element of an array
* `function11(letterPositions)`: finds a letters position
* `function12(map)`: applies a function to each element in an array
* `function13(middle)`: returns the middle element of an array
* `function14(tail)`: returns all elements of an array after the first
* `function15(takeUntil)`: returns all chars until a specified char in a string
* `function16(without)`: removes specified elements from a string

