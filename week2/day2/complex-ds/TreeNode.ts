class TreeNode {
  constructor(
    public value: string,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
    public height: number = 1
  ){}
}
export {
  TreeNode as Node
}
