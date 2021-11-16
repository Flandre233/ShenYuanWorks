import { Printable } from '../../04-printable'
class Domino implements Printable{
  constructor(
    protected valueA: number,
    protected valueB: number
  ) {}
  getValues() {
    return [this.valueA, this.valueB]
  }
  printAllFields() {
    console.log(`[${this.valueA}|${this.valueB}]`)
  }
}
export { Domino }
