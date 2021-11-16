class Plant {
  constructor(color, type, water, absorb, needWaterLess) {
    this.color = color
    this.type = type
    this.water = water
    this.absorb = absorb
    this.needWaterLess = needWaterLess
  }
  watering(water) {
    this.water += water * this.absorb
  }
  status() {
    return `The ${this.color} ${this.type}${this.water < this.needWaterLess ? '' : ' doesnt'} needs water`
  }
}
class Flower extends Plant{
  constructor(color, water = 0) {
    super(color, 'Flower', water, 0.75, 5)
  }
}
class Tree extends Plant{
  constructor(color, water = 0) {
    super(color, 'Tree', water, 0.4, 10)
  }
}
class Garden {
  constructor() {
    this.gardenList = []
  }
  add(plant) {
    this.gardenList.push(plant)
  }
  waterAll(water) {
    console.log(`Watering with ${water}`)
    this.gardenList.forEach(plant => plant.watering(water / this.gardenList.length))
  }
  toString() {
    return this.gardenList.map(x => x.status()).join('\n')
  }
}

const garden = new Garden()
garden.add(new Flower('yellow'))
garden.add(new Flower('blue'))
garden.add(new Tree('purple'))
garden.add(new Tree('orange'))

console.log(String(garden))
garden.waterAll(40)
console.log(String(garden))
garden.waterAll(70)
console.log(String(garden))
