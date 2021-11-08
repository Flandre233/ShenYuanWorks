class Counter {
  constructor(count = 0) {
    this.count = count
    this.init = count
  }
  add(plusNumber) {
    this.count += plusNumber || 1
  }
  get() {
    return this.count
  }
  reset() {
    this.count = this.init
  }
}

const c = new Counter(5)
console.log(`counter: ${c.get()}`)
c.add()
console.log(`counter: ${c.get()}`)
c.add(34)
console.log(`counter: ${c.get()}`)
c.reset()
console.log(`counter: ${c.get()}`)
