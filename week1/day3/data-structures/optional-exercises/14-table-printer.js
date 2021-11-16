'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
]

const renderTable = table => {
  const tableWidth = [Math.max(...table.map(x => x.name.length)) + 2, 'Needs cooling'.length + 2, 'In stock'.length + 2]
  console.log(`+${'-'.repeat(tableWidth[0])}+${'-'.repeat(tableWidth[1])}+${'-'.repeat(tableWidth[2])}+`)
  console.log(`| Ingredient${' '.repeat(tableWidth[0] - 2 - 'Ingredient'.length)} | Needs cooling | In stock |`)
  console.log(`+${'-'.repeat(tableWidth[0])}+${'-'.repeat(tableWidth[1])}+${'-'.repeat(tableWidth[2])}+`)
  table.forEach(x => {
    console.log(`| ${x.name}${' '.repeat(tableWidth[0] - 2 - x.name.length)} | ${x.needsCooling ? 'Yes' : 'No'}${' '.repeat(tableWidth[1] - 2 - (x.needsCooling ? 3 : 2))} | ${x.inStock ? x.inStock : '-'}${' '.repeat(tableWidth[2] - 2 - `${x.inStock}`.length )} |`)
  })
  console.log(`+${'-'.repeat(tableWidth[0])}+${'-'.repeat(tableWidth[1])}+${'-'.repeat(tableWidth[2])}+`)
}

renderTable(ingredients)