import { LinkedListInterface } from "../interfaces"
import { StringNode } from "./StringNode"

class StringLinkedList implements LinkedListInterface {
  protected head = new StringNode('HEAD')
  length = 0
  constructor(initArray?: string[]) {
    if(initArray) {
      initArray.forEach(value => {
        this.add(value)
      })
    }
  }
  add(value: string, index?: number){
    let target = this.getNode(index ?? this.size())
    target.setNext(new StringNode(value, target.next()))
    this.length ++
  }
  getNode(index: number) {
    if(index > 0) {
      let target = this.head
      while (index -- > 0 && target.next()) {
        target = <StringNode>target.next()
      }
      return target
    } else {
      return this.head
    }
  }
  get(index: number){
    return this.getNode(index)?.next()?.val() || 'error'
  }
  removeItem(value: string) {
    let prevent = this.head, target = prevent?.next()
    if(target) {
      do {
        if(target.val() == value) {
          prevent.setNext(<StringNode>target.next())
          this.length --
        }
        prevent = target
        target = target.next()
      } while (target)
    }
  }
  remove(index: number) {
    let prevent = this.getNode(index), target = prevent?.next()
    if(target) {
      prevent.setNext(<StringNode>target.next())
      return target.val() || 'error'
    } else {
      return 'error'
    }
  }
  size() {
    let count = 0, node = this.head
    while(node.next()) {
      node = <StringNode>node.next()
      count ++
    }
    return count
  }
  output() {
    let arr = [], i = this.head
    while (i.next()) {
      i = <StringNode>i.next()
      arr.push(i.val())
    }
    return arr
  }
  getHead() {
    return this.head
  }
}

export {
  StringLinkedList
}

// const ll = new StringLinkedList(['5', '6', '7'])
// console.log(ll.size())
// console.log(ll.getNode(0))
// ll.add('1')
// ll.add('2')
// ll.add('3')
// console.log(ll.getHead())
// console.log(ll.output())
// ll.add('4', 0)
// console.log(ll.getNode(0))
// console.log(ll.getHead())
// console.log(ll.output())
// console.log(ll.remove(3))
// console.log(ll.getHead())
// console.log(ll.output())
// console.log(ll.get(1))
// ll.add('1')
// ll.add('2')
// ll.add('1')
// ll.add('2')
// ll.add('1')
// ll.add('2')
// console.log(ll.output())
// ll.removeItem('2')
// console.log(ll.output())
