const map = {}

map['978-1-60309-452-8'] = 'A Letter to Jo'
map['978-1-60309-459-7'] = 'Lupus'
map['978-1-60309-444-3'] = 'Red Panda and Moon Bear'
map['978-1-60309-461-0'] = 'The Lab'

Object.keys(map).forEach(key => {
  console.log(`${map[key]}(ISBN: ${key})`)
})

delete map['978-1-60309-444-3']

Object.keys(map).forEach(key => {
  if(map[key].indexOf('Lab') > -1) {
    delete map[key]
  }
})

map['978-1-60309-450-4'] = 'They Called Us Enemy'
map['978-1-60309-453-5'] = 'Why Did We Trust Him?'

console.log(!!map['478-0-61159-424-8'])

console.log(map['978-1-60309-453-5'])