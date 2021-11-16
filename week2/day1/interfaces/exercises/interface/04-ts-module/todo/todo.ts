import { Printable } from '../../04-printable'
class Todo implements Printable{
  constructor(
    protected todo: string,
  ) {}
  printAllFields() {
    console.log(this.todo)
  }
}
export { Todo }
