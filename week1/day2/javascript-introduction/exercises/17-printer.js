'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...params) {
  for(let i = 0; i < params.length; i ++) {
    console.log(params[i])
  }
}

printer('ha', 'ha', 'ha')