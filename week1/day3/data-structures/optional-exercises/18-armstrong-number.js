const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkArmstrongNumber = num => num == `${num}`.split('').reduce((p, e, i, a) => p + Math.pow(parseInt(e), a.length), 0)


rl.question(`input number: `, num => {
  console.log(`The ${num} is${checkArmstrongNumber(parseInt(num)) ? ' ': ' NOT '}an Armstrong number.`)
  rl.close();
});
