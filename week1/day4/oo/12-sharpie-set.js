const { Sharpie } = require('./04-sharpie')
class SharpieSet {
  constructor() {
    this.sharpieList = []
  }
  add(sharpie) {
    this.sharpieList.push(sharpie)
  }
  countUsable() {
    return this.sharpieList.filter(sharpie => sharpie.inkAmount > 0).length
  }
  removeTrash() {
    this.sharpieList = this.sharpieList.filter(sharpie => sharpie.inkAmount > 0)
  }
}

const sharpieSet = new SharpieSet()
const blackSharpie = new Sharpie('black', 100, 10)
const redSharpie = new Sharpie('red', 100, 10)
const blueSharpie = new Sharpie('blue', 100, 1)

sharpieSet.add(blackSharpie)
sharpieSet.add(redSharpie)
sharpieSet.add(blueSharpie)

console.log(sharpieSet.countUsable())
blueSharpie.use()
console.log(sharpieSet.countUsable())
sharpieSet.removeTrash()
console.log(sharpieSet.sharpieList)