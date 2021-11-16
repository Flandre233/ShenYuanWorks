'use strict';

// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

let t = [1, 2, 3, 4, 5]

t.splice(2, 0, 1000)

console.log(t[2])