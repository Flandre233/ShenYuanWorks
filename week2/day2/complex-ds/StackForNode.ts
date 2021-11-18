import { StackInterface } from "./interfaces"
import { Node } from "./Node"

class StackForNode implements StackInterface {
  public head = new Node('HEAD')
  constructor(initArray?: string[]) {
    if(initArray) {
      initArray.forEach(value => {
        this.push(value)
      })
    }
  }
  empty() {
    return !Boolean(this.head.next)
  }
  peek() {
    return this.empty() ? 'HEAD' : this.head.next?.value!
  }
  push(value: string) {
    this.head.next = new Node(value, this.head.next)
  }
  pop() {
    if(this.empty()) {
      return 'EMPTY'
    } else {
      let out = <Node>this.head.next
      this.head.next = out.next
      return out?.value
    }
  }
}

export { StackForNode }
// const ss = new StackForNode(['1', '2'])
// ss.push('114514')
// console.log(ss.peek())
