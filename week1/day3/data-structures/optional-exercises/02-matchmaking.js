'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];
const makingMatches = (arr1, arr2) => {
  let out = []
  while (arr1.length || arr2.length) {
    if(arr1.length)
      out.push(arr1.shift())
    if(arr2.length)
      out.push(arr2.shift())
  }
  return out
}

console.log(makingMatches(girls, boys));

module.exports = makingMatches;