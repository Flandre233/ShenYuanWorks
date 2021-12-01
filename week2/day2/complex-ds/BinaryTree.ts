import { Node } from "./TreeNode"
import { TreeInterface } from "./interfaces"

class BinaryTree implements TreeInterface {
  public root: Node | null = null
  private NodeValueList : string[] = []
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
    this.NodeValueList.push(value)
    if(this.empty()) {
      this.root = new Node(value)
    } else {
      this.insert(value, [this.root!])
    }
  }
  remove(value: string) {
    if(this.search(value)) {
      let newTree = this.NodeValueList
      newTree.splice(newTree.indexOf(value), 1)
      this.root = null
      this.NodeValueList = []
      newTree.forEach(value => this.add(value))
    }
  }
  search(value: string){
    return new Set(this.NodeValueList).has(value)
  }
  // 中序遍历
  inOrderTraversal(TreeNode = this.root): any[] {
    if(TreeNode) {
      return [
        ...this.inOrderTraversal(TreeNode.left),
        TreeNode.value,
        ...this.inOrderTraversal(TreeNode.right)
      ]
    } else {
      return []
    }
  }
  // 先序遍历
  preOrderTraversal(TreeNode = this.root): any[] {
    if(TreeNode) {
      return [
        TreeNode.value,
        ...this.preOrderTraversal(TreeNode.left),
        ...this.preOrderTraversal(TreeNode.right)
      ]
    } else {
      return []
    }
  }
  // 后序遍历
  postOrderTraversal(TreeNode = this.root): any[] {
    if(TreeNode) {
      return [
        ...this.postOrderTraversal(TreeNode.left),
        ...this.postOrderTraversal(TreeNode.right),
        TreeNode.value
      ]
    } else {
      return []
    }
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
console.log('=== 中序遍历 ===')
console.log(bt.inOrderTraversal())
console.log('=== 先序遍历 ===')
console.log(bt.preOrderTraversal())
console.log('=== 后序遍历 ===')
console.log(bt.postOrderTraversal())
bt.remove('3')
console.log(bt.root)
