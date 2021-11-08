const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`how many people: `, num => {
  let arr = new Array(parseInt(num)).fill(0).map((x, i) => i), i = 0
  while(arr.length > 1) {
    if(++ i > arr.length) {
      i = 1
    }
    if(i == arr.length) {
      i = 0
    }
    // console.log(arr, i)
    arr.splice(i, 1)
  }
  console.log(arr[0] + 1)
  rl.close();
});
