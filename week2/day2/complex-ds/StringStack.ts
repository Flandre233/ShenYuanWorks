import { StackInterface } from "./interfaces";

class StringStack implements StackInterface {
  constructor(protected stack: string[] = []) {}
  empty(){
    return !(this.stack.length > 0)
  }
  peek() {
    return this.empty() ? 'empty': this.stack[this.stack.length - 1]
  }
  push(value: string): void{
    this.stack.push(value)
  }
  pop() {
    return this.stack.pop() || 'empty'
    // return this.empty() ? 'empty' : this.stack.pop()!
    // or
    // return this.empty() ? 'empty' : this.stack.pop() as string
    // or
    // return this.empty() ? 'empty' : <string>this.stack.pop()
  }
}

export { StringStack }
// const ss = new StringStack(['1', '2'])
// console.log(ss.peek())
