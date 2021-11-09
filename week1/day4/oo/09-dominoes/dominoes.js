'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
for(let i = 1; i < dominoes.length; i++) {
  for(let j = i; j < dominoes.length; j ++) {
    if(dominoes[i - 1].values[1] === dominoes[j].values[0]) {
      let tmp = dominoes[i]
      dominoes[i] = dominoes[j]
      dominoes[j] = tmp
      break
    }
  }
}
console.log(dominoes.toString());