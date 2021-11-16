'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(num) {
  if(typeof num == 'number') {
    if(num) {
      return num * factorio(num - 1)
    } else {
      return 1
    }
  } else {
    throw new Error('st number type')
  }
}

factorio(7)