let map = {
  'William A. Lathan' : '405-709-1865',
  'John K. Miller' : '402-247-8568',
  'Hortensia E. Foster' : '606-481-6467',
  'Amanda D. Newland' : '319-243-5613',
  'Brooke P. Askew' : '307-687-2982'
}

const findNumber = name => map[name]

const findName = number => Object.keys(map).filter(key => map[key] === number)[0]

const has = name => !! map[name]

console.log(findNumber('John K. Miller'))
console.log(findName('307-687-2982'))
console.log(has('Chris E. Myers'))