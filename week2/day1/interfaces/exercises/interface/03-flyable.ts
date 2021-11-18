interface Flyable {
  land(): void
  fly(): void
  takeOff(): void
}

abstract class Vehicle{
  constructor(
    protected name: string,
    protected shouldFly: boolean,
    protected isFlying: boolean = false
  ) {}
}

class Helicopter extends Vehicle implements Flyable {
  constructor(name: string) {
    super(name, true);
  }
  land() {

  }
  fly() {

  }
  takeOff() {

  }
}

export { Flyable, Helicopter }
