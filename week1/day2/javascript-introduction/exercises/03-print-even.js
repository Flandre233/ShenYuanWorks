'use strict';

// Create a program that prints all the even numbers between 0 and 500

function printEven(start, end) {
  for (let i = start; i <= end; i ++) {
    if(i % 2) {
      continue
    }
    console.log(i)
  }
}
printEven(0, 500)