const { Animal } = require('./03-animal')
class Farm {
  constructor(places = 5) {
    this.animalList = []
    this.places = places
  }
  breed() {
    if(this.animalList.length < this.places) {
      this.animalList.push(new Animal(Math.floor(50 * Math.random()), Math.floor(50 * Math.random())))
      console.log('breed success')
    } else {
      console.log('full')
    }
  }
  slaughter() {
    if(this.animalList.length) {
      this.animalList.sort((a, b) => a.hunger - b.hunger)
      this.animalList.shift()
      console.log('slaughter success')
    } else {
      console.log('empty')
    }
  }
}

const farm = new Farm(3)
farm.breed()
farm.breed()
farm.breed()
farm.breed()
console.log(farm)
farm.slaughter()
farm.breed()
farm.breed()
console.log(farm)
