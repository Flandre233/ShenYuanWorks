class Animal {
  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger
    this.thirst = thirst
  }
  eat() {
    this.hunger --
  }
  drink() {
    this.thirst --
  }
  play() {
    this.hunger ++
    this.thirst ++
  }
  status() {
    console.log(` hunger: ${this.hunger}\n thirst: ${this.thirst}`)
  }
}

const dog = new Animal()
dog.status()
console.log('dog play')
dog.play()
dog.status()
console.log('dog eat')
dog.eat()
dog.status()
console.log('dog drink')
dog.drink()
dog.status()

module.exports = {
  Animal
}