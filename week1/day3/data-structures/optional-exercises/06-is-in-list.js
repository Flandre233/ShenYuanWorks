'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

const checkNums = arr => !!arr.filter(x => new Set([4, 8, 12, 16]).has(x)).length

console.log(checkNums(listOfNumbers));

module.exports = checkNums;