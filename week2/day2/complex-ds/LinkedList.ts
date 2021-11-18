import { LinkedListInterface } from "./interfaces";
import { Node } from "./Node";

class LinkedList implements LinkedListInterface {
  public head: Node = new Node('HEAD')
  public length: number = 0
  constructor(initArray?: string[]) {
    if(initArray) {
      initArray.forEach(value => {
        this.add(value)
      })
    }
  }
  add(value: string, index?: number) {
    let target = <Node>this.getPreventNode(index ?? this.size())
    target.next = new Node(value, target?.next)
    this.length ++
  }
  getPreventNode(index: number) {
    if(index > 0) {
      let target = this.head
      while (index -- > 0 && target?.next) {
        target = <Node>target.next
      }
      return target
    }
    return this.head
  }
  get(index: number) {
    return this.getPreventNode(index)?.next?.value || 'error'
  }
  removeItem(value: string) {
    let prevent: Node | null = this.head
    while (prevent?.next) {
      if(prevent.next.value == value) {
        prevent.next = prevent.next.next
        this.length --
      }
      prevent = prevent.next
    }
  }
  remove(index: number) {
    let prevent = this.getPreventNode(index)
    if(prevent == this.head) {
      return 'DO NOT REMOVE HEAD'
    }
    if(prevent.next) {
      let removeItem = prevent.next
      prevent.next = removeItem.next
      this.length --
      return removeItem.value
    } else {
      return 'OUT OF LIST'
    }
  }
  size() {
    return this.length
  }
  [Symbol.iterator](){
    let target = this.head
    return {
      next(){
        if(target.next){
          target = target.next
          return {
            value: target.value,
            done: false
          }
        } else {
          return{
            value: target.value,
            done: true
          }
        }
      }
    }
  }
  toArray() {
    return Array.from(this)
  }
  toString() {
    return this.toArray().join('-')
  }
}

export { LinkedList }

const ll = new LinkedList(['5', '6', '7'])
console.log(ll.size())
console.log(ll.getPreventNode(0))
ll.add('1')
ll.add('2')
ll.add('3')
console.log(ll.head)
console.log(String(ll))
ll.add('4', 0)
console.log(ll.getPreventNode(0))
console.log(ll.head)
console.log(String(ll))
console.log(ll.remove(300))
console.log(ll.head)
console.log(String(ll))
console.log(ll.get(1))
ll.add('1')
ll.add('2')
ll.add('1')
ll.add('2')
ll.add('1')
ll.add('2')
console.log(String(ll))
ll.removeItem('2')
console.log(String(ll))
console.log(Array.from(ll))
console.log(ll.length)
