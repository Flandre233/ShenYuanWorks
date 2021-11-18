import { LinkedList } from "./interfaces"

class StringLinkedListNode {
  constructor(protected value: string | null = null, protected nextNode: StringLinkedListNode | null = null) {}
  val() {
    return this.value
  }
  setNext(node: StringLinkedListNode) {
    this.nextNode = node
  }
  next() {
    return this.nextNode
  }
}

class StringLinkedList implements LinkedList {
  protected head = new StringLinkedListNode()
  constructor() {}
  add(value: string, index?: number){
    let node
    if(typeof index == 'number' && index >= 0 && this.getNode(index)) {
      node = this.getNode(index)
    } else {
      node = this.getNode(this.size())
    }
    node.setNext(new StringLinkedListNode(value, node.next()))
  }
  getNode(index: number) {
    if(index > 0) {
      let tar = this.head
      while (index -- > 0 && tar.next()) {
        tar = <StringLinkedListNode>tar.next()
      }
      return tar
    } else {
      return this.head
    }
  }
  get(index: number){
    return this.getNode(index)?.next()?.val() || 'error'
  }
  removeItem(value: string) {
    console.log(value)
  }
  remove(index: number) {
    let prev = this.getNode(index), tar = prev?.next()
    if(tar) {
      prev?.setNext(<StringLinkedListNode>tar.next())
      return tar.val() || 'error'
    } else {
      return 'error'
    }

  }
  size() {
    let count = 0, node = this.head
    while(node.next()) {
      node = <StringLinkedListNode>node.next()
      count ++
    }
    return count
  }
  output() {
    let arr = [], i = this.head
    while (i.next()) {
      i = <StringLinkedListNode>i.next()
      arr.push(i.val())
    }
    return arr
  }
  getHead() {
    return this.head
  }
}

// export {
//   StringLinkedList
// }

const ll = new StringLinkedList()
console.log(ll.size())
console.log(ll.getNode(0))
ll.add('1')
ll.add('2')
ll.add('3')
console.log(ll.getHead())
console.log(ll.output())
ll.add('4', 0)
console.log(ll.getNode(0))
console.log(ll.getHead())
console.log(ll.output())
console.log(ll.remove(0))
console.log(ll.getHead())
console.log(ll.output())
console.log(ll.get(1))
