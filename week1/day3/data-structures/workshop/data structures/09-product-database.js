const map = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550
}

const howMuch = product => map[product]

const mostExpensive = () => {
  let product = '', price = 0
  Object.keys(map).forEach(key => {
    if(map[key] > price) {
      product = key
      price = map[key]
    }
  })
  return product
}

const averagePrice = product => Object.values(product).reduce((p, e) => p + e) / Object.values(product).length

const below = price => Object.keys(map).filter(key => map[key] < price).length

const exactly = price => Object.keys(map).filter(key => map[key] < price)

const cheapest = () => {
  let product = '', price = -1
  Object.keys(map).forEach(key => {
    if(map[key] < price || price == -1) {
      product = key
      price = map[key]
    }
  })
  return product
}

console.log(howMuch('Fish'))
console.log(mostExpensive())
console.log(averagePrice())
console.log(below(300))
console.log(exactly(125))
console.log(cheapest())