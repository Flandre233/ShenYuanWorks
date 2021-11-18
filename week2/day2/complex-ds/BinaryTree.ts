import { Node } from "./TreeNode"
import { TreeInterface } from "./interfaces"

class BinaryTree implements TreeInterface {
  public root: Node | null = null
  constructor() {}
  empty() {
    return !Boolean(this.root)
  }
  insert(value: string, nodes: Node[]):any {
    let nodesTmp: Node[] = []
    for(let i = 0; i < nodes.length; i ++) {
      let node = nodes[i]
      if(!node.left) {
        node.left = new Node(value)
        return
      }
      if(!node.right) {
        node.right = new Node(value)
        return
      }
      nodesTmp.push(node.left, node.right)
    }
    return this.insert(value, nodesTmp)
  }
  add(value: string) {
    if(this.empty()) {
      this.root = new Node(value)
    } else {
      this.insert(value, [this.root!])
    }
  }
  remove(value: string) {
    console.log(value)
  }
  search(value: string){
    console.log(value)
    return true
  }
}

let bt = new BinaryTree()
bt.add('1')
bt.add('2')
bt.add('3')
bt.add('4')
bt.add('5')
bt.add('6')
bt.add('7')
bt.add('8')
console.log(bt.root)
