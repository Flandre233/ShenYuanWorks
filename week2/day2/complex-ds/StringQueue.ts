import { QueueInterface } from "./interfaces";

class StringQueue implements QueueInterface {
  constructor(protected queue: string[] = []) {}
  empty(){
    return !(this.queue.length > 0)
  }
  peek() {
    return this.empty() ? 'empty': this.queue[0]
  }
  add(value: string): void{
    this.queue.push(value)
  }
  remove() {
    return this.queue.shift() || 'empty'
    // return this.empty() ? 'empty' : this.queue.shift()!
    // or
    // return this.empty() ? 'empty' : this.queue.shift() as string
    // or
    // return this.empty() ? 'empty' : <string>this.queue.shift()
  }
}

export { StringQueue }
// const ss = new StringQueue(['1', '2'])
// console.log(ss.peek())
