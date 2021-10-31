'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const delayOutput = (timeout, output) => {
  setTimeout(() => {
    console.log(output)
  }, timeout)
}
delayOutput(0, 'apple')
delayOutput(1000, 'pear')
delayOutput(3000, 'melon')
delayOutput(5000, 'grapes')