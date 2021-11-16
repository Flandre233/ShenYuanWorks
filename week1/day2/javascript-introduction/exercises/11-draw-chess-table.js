// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

function renderChessTable(width, height) {
  for(let i = 0; i < width; i ++) {
    let str = ''
    for(let j = 0; j < height; j++) {
      str += (i + j) % 2 ? ' ' : '%'
    }
    console.log(str)
  }
}
renderChessTable(8, 8)