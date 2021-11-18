class Node {
  constructor(
    public value: string,
    public next: Node | null = null,
    public prev: Node | null = null
  ){}
}
export { Node }
