export class List<T> {
  private items: T[]

  private constructor(...elements: T[]) {
    this.items = elements
  }

  static create<T>(...elements: T[]): List<T> {
    return new List(...elements)
  }

  append(other: List<T>): List<T> {
    return new List(...this.items, ...other.items)
  }

  concat(listOfLists: List<List<T>>): List<T> {
    const flatItems = listOfLists.items.flatMap((list) => list.items)
    return new List(...this.items, ...flatItems)
  }

  filter(predicate: (el: T) => boolean): List<T> {
    return new List(...this.items.filter(predicate))
  }

  length(): number {
    return this.items.length
  }

  map<U>(fn: (el: T) => U): List<U> {
    return new List(...this.items.map(fn))
  }

  foldl<U>(fn: (acc: U, el: T) => U, initial: U): U {
    return this.items.reduce(fn, initial)
  }

  foldr<U>(fn: (acc: U, el: T) => U, initial: U): U {
    return this.items.reduceRight(fn, initial)
  }

  reverse(): List<T> {
    return new List(...[...this.items].reverse())
  }

  forEach(callback: (item: T) => void): void {
    this.items.forEach(callback)
  }
}
