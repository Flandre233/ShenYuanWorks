import { QueueInterface } from "./interfaces"
import { StackForNode } from "./StackForNode"

class QueueForStack implements QueueInterface {
  protected pushStack: StackForNode
  protected popStack: StackForNode = new StackForNode()
  constructor(initArray?: string[]) {
    this.pushStack = new StackForNode(initArray)
  }
  empty() {
    return this.pushStack.empty()
  }
  streamToPop() {
    while (!this.pushStack.empty()) {
      this.popStack.push(this.pushStack.pop())
    }
  }
  streamToPush() {
    while (!this.popStack.empty()) {
      this.pushStack.push(this.popStack.pop())
    }
  }
  peek() {
    this.streamToPop()
    let value = this.popStack.peek()
    this.streamToPush()
    return value
  }
  add(value: string) {
    this.pushStack.push(value)
  }
  remove() {
    this.streamToPop()
    let value = this.popStack.pop()
    this.streamToPush()
    return value
  }
}

export { QueueForStack }

// const ss = new QueueForStack(['1', '2', '3'])
// console.log(ss.remove())
// console.log(ss.peek())
// console.log(ss.remove())
// console.log(ss.peek())
// console.log(ss.remove())
// console.log(ss.peek())
// ss.add('3')
// console.log(ss.peek())
