class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ){}
}
export {
  TreeNode as Node
}
