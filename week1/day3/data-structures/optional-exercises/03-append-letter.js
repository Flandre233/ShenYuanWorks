'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

const appendA = arr => arr.map(s => `${s}a`)

console.log(appendA(far));
module.exports = appendA;