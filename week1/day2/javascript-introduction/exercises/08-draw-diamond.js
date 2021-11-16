'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
function renderDiamond(height) {
  if((height % 2)) {
    let half = Math.ceil(height / 2)
    for (let i = 1; i <= height; i ++) {
      if(i <= half) {
        console.log(`${' '.repeat(half - i)}${'*'.repeat(i * 2 - 1)}`)
      } else {
        console.log(`${' '.repeat(i - half)}${'*'.repeat((half * 2 - i) * 2 - 1)}`)
      }
    }
  }
}
renderDiamond(lineCount)