const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sendQuestionSync = question =>
  new Promise(resolve => {
    rl.question(question, val => {
      resolve(val)
    })
  });

(async () => {
  let randomNumber = Math.floor(100 * Math.random()) + 1,
    question = `I've the number between 1-100. You have 5 lives.(${randomNumber})\n>`,
    hp = 5
  while(hp -- > 0) {
    let input = await sendQuestionSync(question)
    if(input == randomNumber) {
      console.log(`Congratulations. You won!`)
      break
    } else {
      question = `Too ${input < randomNumber ? 'low' : 'high'}. You have ${hp} lives left.\n>`
    }
  }
  console.log(`game over`)
  rl.close()
})()
