'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well

fleet.add(new Thing('Get milk'))
fleet.add(new Thing('Remove the obstacles'))
fleet.add(new Thing('Stand up'))
fleet.add(new Thing('Eat lunch'))
fleet.getThings().filter(thing => new Set(['Stand up', 'Eat lunch']).has(thing.getName())).forEach(thing => thing.complete())

const print = things => {
  console.log(`${things.map((thing, index) => `${index + 1}. [${thing.getCompleted() ? 'x' : ' '}] ${thing.getName()}`).join('\n')}`)
}

print(fleet.getThings())
