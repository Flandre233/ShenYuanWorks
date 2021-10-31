'use strict';

const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function renderTriangle(height) {
  for(let i = 0; i < height; i ++) {
    console.log('*'.repeat(i + 1))
  }
}
renderTriangle(lineCount)