export class BinarySearchTree {
    public data: number
    public left: BinarySearchTree|null = null
    public right: BinarySearchTree|null = null

    constructor(v: number) {
        this.data = v
    }

    insert(v: number) {
        const dir = this.data < v ? 'right': 'left'
        this[dir] ? this[dir]!.insert(v) : this[dir] = new BinarySearchTree(v)
    }

    each(fn: Function) {
        this.left ? this.left.each(fn) : 0
        fn(this.data)
        this.right ? this.right.each(fn) : 0
    }
}