const price = {
  'Milk': 1.07,
  'Rice': 1.59,
  'Eggs': 3.14,
  'Cheese': 12.60,
  'Chicken Breasts': 9.40,
  'Apples': 2.31,
  'Tomato': 2.58,
  'Potato': 1.75,
  'Onion': 1.10,
}

const bob = {
  'Milk': 3,
  'Rice': 2,
  'Eggs': 2,
  'Cheese': 1,
  'Chicken Breasts': 4,
  'Apples': 1,
  'Tomato': 2,
  'Potato': 1
}

const alice = {
  'Rice': 1,
  'Eggs': 5,
  'Chicken Breasts': 2,
  'Apples': 1,
  'Tomato': 10,
}

const countPay = (price, list) => Object.keys(list).reduce((p, e) => p + price[e] * list[e], 0)

const moreThan = (product, bob, alice) => bob[product] > alice[product] ? 'bob': 'alice'

const productTypeCount = list => Object.keys(list).length

const productCount = list => Object.values(list).reduce((p, e) => p + e)

console.log(countPay(price, bob))
console.log(countPay(price, alice))
console.log(moreThan('Rice', bob, alice))
console.log(moreThan('Potato', bob, alice))
console.log(productTypeCount(bob) > productTypeCount(alice) ? 'bob': 'alice')
console.log(productCount(bob) > productCount(alice) ? 'bob': 'alice')