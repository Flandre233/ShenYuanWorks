class Station {
  constructor(gasAmount) {
    this.gasAmount = gasAmount
  }
  refill(car) {
    this.gasAmount -= (car.capacity - car.gasAmount)
    car.gasAmount = car.capacity
  }
  toString() {
    return `Station gas amount : ${this.gasAmount}`
  }
}
class Car {
  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount
    this.capacity = capacity
  }
  toString() {
    return `Car gas amount : ${this.gasAmount}`
  }
}

const station = new Station(10000)
const car = new Car()

console.log(String(station))
console.log(String(car))
station.refill(car)
console.log(String(station))
console.log(String(car))

const car2 = new Car(27, 150)
console.log(String(car2))
station.refill(car2)
console.log(String(station))
console.log(String(car2))


