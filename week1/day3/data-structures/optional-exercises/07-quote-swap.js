'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

const words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];

const quoteSwap = words => {
  let tmp = words[2]
  words[2] = words[5]
  words[5] = tmp
  return words.join(' ')
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

module.exports = quoteSwap;