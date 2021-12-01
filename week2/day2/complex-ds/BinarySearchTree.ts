import { Node } from "./TreeNode"
import { TreeInterface } from "./interfaces"

class BinarySearchTree implements TreeInterface {
  public root: Node | null = null
  empty() {
    return !Boolean(this.root)
  }
  add(value: string) {
    if(this.root) {
      let type = this.insert(value, this.root)
      console.log('============ type =============')
      console.log(type)
    } else {
      this.root = new Node(value)
    }
  }
  insert(value: string, node: Node): string {
    let type = ''
    if(parseInt(value) < parseInt(node.value)) {
      if(node.left) {
        type = this.insert(value, node.left)
        if(type.length == 1) {
          type = `L${type}`
        }
        console.log(`===>[${node.value}] ${this.getNodeDepth(node.left)}, ${this.getNodeDepth(node.right)}`)
        if(Math.abs(this.getNodeDepth(node.left) - this.getNodeDepth(node.right)) > 1) {
          console.log('===== target node =====')
          console.log(node.value)
          this.rotateTree(type, node)
        }
      } else {
        node.left = new Node(value, null, null, node)
        type = 'L'
      }
    } else {
      if(node.right) {
        type = this.insert(value, node.right)
        if(type.length == 1) {
          type = `R${type}`
        }
        console.log(`===>[${node.value}] ${this.getNodeDepth(node.left)}, ${this.getNodeDepth(node.right)}`)
        if(Math.abs(this.getNodeDepth(node.left) - this.getNodeDepth(node.right)) > 1) {
          console.log('===== target node =====')
          console.log(node.value)
          this.rotateTree(type, node)
        }
      } else {
        node.right = new Node(value, null, null, node)
        type = 'R'
      }
    }
    return type
  }
  getNodeDepth(node: Node|null, depth = 0): number {
    if(node) {
      return Math.max(node.left ? this.getNodeDepth(node.left, depth + 1) : depth + 1, node.right ? this.getNodeDepth(node.right, depth + 1) : depth + 1)
    } else {
      return 0
    }
  }
  rotateTree(type: string, node: Node) {
    console.log('>>>')
    console.log(type)
    console.log(node.value)
    let tmp
    switch (type) {
      case 'LL':
        if(this.root == node){
          this.root = node.left
          node.left!.preNode = null
        }
        tmp = node.left!.right
        node.left!.right = node
        node.preNode = node.left
        node.left = tmp
        break
      case 'RR':
        if(this.root == node){
          this.root = node.right
          node.right!.preNode = null
        }
        tmp = node.right!.left
        node.right!.left = node
        node.right = tmp
        break
    }
  }
  remove(value: string) {
    console.log(value)
  }
  search(value: string) {
    console.log(value)
    return true
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
}

let bst = new BinarySearchTree()
// bst.add('45')
// bst.add('42')
// bst.add('10')
// bst.add('55')
// bst.add('58')
// bst.add('63')
// bst.add('67')
// bst.add('70')
// bst.add('83')
// bst.add('90')
// bst.add('98')

bst.add('50')
bst.add('25')
bst.add('75')
bst.add('15')
bst.add('40')
bst.add('5')
console.log(bst.root)
bst.add('1')
console.log(bst.root)
console.log(bst.inOrderTraversal())
