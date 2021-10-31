const map = {
  'Eggs': 200,
  'Milk': 200,
  'Fish': 400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550
}

const less = (db, price) => Object.keys(db).filter(key => db[key] < price).join('\n')

const more = (db, price) => Object.keys(db).filter(key => db[key] > price).map(key => `${key}: ${db[key]}`).join('\n')

console.log(less(map, 201))
console.log(more(map, 150))