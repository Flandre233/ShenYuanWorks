class StringNode {
  constructor(protected value: string | null = null, protected nextNode: StringNode | null = null) {}
  val() {
    return this.value
  }
  setNext(node: StringNode) {
    this.nextNode = node
  }
  next() {
    return this.nextNode
  }
}
export { StringNode }
