import { Node } from "./TreeNode"
import { TreeInterface } from "./interfaces"

class BinarySearchTree implements TreeInterface {
  public root: Node | null = null
  empty() {
    return !Boolean(this.root)
  }
  add(value: string) {
    console.log('=========== INSERT START =============')
    console.log(`Inserting: ${value}`)
    if(this.root) {
      this.insert(value, this.root)()
    } else {
      this.root = new Node(value)
    }
    console.log('=========== INSERT END =============\n')
  }
  insert(value: string, node: Node) {
    let self = this
    if(parseInt(value) < parseInt(node.value)) {
      console.log(`${value} < ${node.value}. Looking at left subtree`)
      if(node.left) {
        this.insert(value, node.left)()
      } else {
        console.log('Found null tree, inserting element')
        node.left = new Node(value)
      }
    } else {
      console.log(`${value} >= ${node.value}. Looking at right subtree`)
      if(node.right) {
        this.insert(value, node.right)()
      } else {
        console.log('Found null tree, inserting element')
        node.right = new Node(value)
      }
    }
    console.log(`Unwinding Recursion`)
    return function(){
      node.height = self.getNodeDepth(node)
      console.log(`Adjusting height after recursive call (node ${node.value} height to ${node.height})`)
      if(Math.abs((node.left?.height || 0) - (node.right?.height || 0)) > 1) {
        console.log(`unbalanced tree (root node: ${node.value}, type: ${self.checkUnbalancedType(node)})`)
        self.treeRebalanced(node)
      }
    }
  }
  checkUnbalancedType(node: Node, needChild: boolean = true) {
    let type = ''
    if((node.left?.height || 0) == (node.right?.height || 0)) {
      return type
    }
    if((node.left?.height || 0) > (node.right?.height || 0)) {
      type += `L${needChild ? this.checkUnbalancedType(node.left!, false) : ''}`
    } else {
      type += `R${needChild ? this.checkUnbalancedType(node.right!, false) : ''}`
    }
    return type
  }
  treeRebalanced(node: Node) {
    switch(this.checkUnbalancedType(node)) {
      case 'L':
      case 'LL':
        console.log(`Single Rotate Right`)
        this.rotateRight(node)
        break
      case 'LR':
        console.log(`Double Rotate Right`)
        this.rotateLeft(node.left!)
        this.rotateRight(node)
        node.height = this.getNodeDepth(node)
        break
      case 'RL':
        console.log(`Double Rotate Left`)
        this.rotateRight(node.right!)
        this.rotateLeft(node)
        node.height = this.getNodeDepth(node)
        break
      case 'R':
      case 'RR':
        console.log(`Single Rotate Left`)
        this.rotateLeft(node)
        break
      default:
        console.log('unknown unbalanced tree')
    }
  }
  rotateLeft(node: Node) {
    let tmp = new Node('')
    this.copyNode(tmp, node)
    this.copyNode(node, node.right!)
    tmp.right = node.left
    tmp.height = this.getNodeDepth(tmp)
    node.left = tmp
  }
  rotateRight(node: Node) {
    let tmp = new Node('')
    this.copyNode(tmp, node)
    this.copyNode(node, node.left!)
    tmp.left = node.right
    tmp.height = this.getNodeDepth(tmp)
    node.right = tmp
  }
  copyNode(target: Node, source: Node) {
    target.value = source.value
    target.left = source.left
    target.right = source.right
    target.height = source.height
  }
  getNodeDepth(node: Node | null): number {
    if(node) {
      return Math.max(node.left ? this.getNodeDepth(node.left) : 0, node.right ? this.getNodeDepth(node.right) : 0) + 1
    } else {
      return 0
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

// bst.add('50')
// bst.add('25')
// bst.add('35')
/*
   50
  /
 25
  \
   35

   50
  /
 35
 /
25

   35
  /  \
 25  50


*/
// bst.add('15')
// bst.add('40')
// bst.add('5')


bst.add('50')
bst.add('60')
bst.add('70')
bst.add('40')
bst.add('55')
bst.add('30')
bst.add('57')
bst.add('56')


// bst.add('55')
// bst.add('57')
// bst.add('56')


// bst.add('50')
// bst.add('50')



console.log(bst.root)
// bst.add('1')
// console.log(bst.root)
console.log(bst.inOrderTraversal())
