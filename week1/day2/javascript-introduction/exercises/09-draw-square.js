'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function renderSquare(width, height) {
  for(let i = 0; i < height; i ++) {
    if(i == 0 || i == width - 1) {
      console.log('%'.repeat(width))
    } else {
      console.log('%' + ' '.repeat(width - 2) + '%')
    }
  }
}
renderSquare(lineCount, lineCount)