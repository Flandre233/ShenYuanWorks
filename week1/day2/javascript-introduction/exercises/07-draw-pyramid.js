'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function renderPyramid(height) {
  for(let i = 1; i <= height; i ++) {
    console.log(`${' '.repeat(height - i)}${'*'.repeat(i * 2 - 1)}`)
  }
}
renderPyramid(lineCount)