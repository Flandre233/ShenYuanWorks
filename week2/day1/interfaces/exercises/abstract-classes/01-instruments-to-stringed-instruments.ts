abstract class Instrument {
  constructor(protected name: string) {}
  abstract play(): void
}

abstract class StringedInstrument extends Instrument {
  constructor(
    protected name: string,
    protected numberOfStrings: number
  ) {
    super(name);
  }
  abstract sound(): string
  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor(public numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings);
  }
  sound(): string {
    return "Twang";
  }
}
class BassGuitar extends StringedInstrument {
  constructor(public numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
  }
  sound(): string {
    return "Duum-duum-duum";
  }
}
class Violin extends StringedInstrument {
  constructor(public numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }
  sound(): string {
    return "Screech";
  }
}

console.log(
  'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
);
const guitar = new ElectricGuitar();
const bassGuitar = new BassGuitar();
const violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);
const guitar2 = new ElectricGuitar(7);
const bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();