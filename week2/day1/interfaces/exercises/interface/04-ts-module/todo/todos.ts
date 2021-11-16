import { Todo } from "./todo";

function initTodo() {
  const todoList = [];
  todoList.push(new Todo('- Buy milk'));
  todoList.push(new Todo('- Download games'));
  todoList.push(new Todo('    - Diablo'));
  return todoList;
}

const todos = initTodo();

export { todos }
