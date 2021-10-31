'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(...params) {
  return params.reduce(function (p, e){
    return p + e
  }, 0)
}
sum(1, 2, 3, 4)