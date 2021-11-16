'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const createDiagonalMatrix = (line, number) => {
  let out = []
  for(let i = 0; i < line; i ++) {
    let arr = []
    for(let j = 0; j < line; j ++) {
      arr.push(i + j === line - 1 ? number : 0)
    }
    out.push(arr)
  }
  return out
}

console.log(createDiagonalMatrix(4, 1).map(x => x.join(' ')).join('\n'))