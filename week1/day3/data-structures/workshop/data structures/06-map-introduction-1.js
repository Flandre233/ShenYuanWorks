const map = {}

map[97] = 'a'
map[98] = 'b'
map[99] = 'c'
map[65] = 'A'
map[66] = 'B'
map[67] = 'C'

Object.keys(map).forEach(key => {
  console.log(key)
})

Object.values(map).forEach(value => {
  console.log(value)
})

map[68] = 'D'

console.log(Object.keys(map).length)

console.log(map[99])

delete map[97]

console.log(!!map[100])

Object.keys(map).forEach(key => {
  delete map[key]
})