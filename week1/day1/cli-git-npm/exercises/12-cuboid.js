'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l = 3;
let w = 4;
let h = 5;

console.log('Surface Area: ' + 2 * (l * w + l * h + w * h))
console.log('Volume: ' + l * w * h)
