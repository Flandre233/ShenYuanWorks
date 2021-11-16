import { dominoes } from "./04-ts-module/dominoes/dominoes";
import { todos } from "./04-ts-module/todo/todos";

interface Printable {
  printAllFields(): void
}

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields()
}

export { Printable }
