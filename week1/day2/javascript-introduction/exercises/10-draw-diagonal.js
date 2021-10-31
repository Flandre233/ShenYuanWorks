'use strict';

const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

function renderDiagonal(width) {
  for(let i = 0; i < width; i ++) {
    if(i == 0 || i == width - 1) {
      console.log('%'.repeat(width))
    } else {
      console.log('%' + ' '.repeat(i - 1) + '%' + ' '.repeat(width - 2 - i) + '%')
    }
  }
}
renderDiagonal(lineCount)