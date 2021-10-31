'use strict';

const students = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

const filterCandy = (list, number) => list.filter(x => x.candies > number).map(x => x.name).join(', ')

console.log(filterCandy(students, 4))

// create a function that takes a list of students and logs:
//  - how many candies they have on average

const averageCandy = list => list.map(x => x.candies).reduce((p, e) => p + e) / list.length

console.log(averageCandy(students))