import { Flyable } from '../04-ts-module/03-flyable'
abstract class Animal {
  constructor(protected name: string) {}
  abstract getName(): string
  abstract breed(): string
}

class Mammal extends Animal {
  getName(): string {
    return this.name
  }
  breed(): string {
    return 'pushing miniature versions out.'
  }
}

abstract class LayingEggsAnimal extends Animal {
  getName(): string {
    return this.name
  }
  breed(): string {
    return 'laying eggs.'
  }
}

class Bird extends LayingEggsAnimal implements Flyable {
  land() {

  }
  fly() {

  }
  takeOff() {

  }
}

class Reptile extends LayingEggsAnimal {}

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
