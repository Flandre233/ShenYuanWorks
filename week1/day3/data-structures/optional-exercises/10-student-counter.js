'use strict';

const students = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
]

// create a function that takes a list of students and logs:
// - How many candies are owned by students altogether

const candyCount = list => list.reduce((p, e) => p + e.candies, 0)

console.log(candyCount(students))

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

const ageCountForCandy = (age, list) => list.filter(x => x.candies < 5).reduce((p, e) => p + e.age, 0)

console.log(ageCountForCandy(5, students))