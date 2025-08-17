export class CustomSet<T> {

    constructor(private data: T[] = []) {
    }

    empty(): boolean {
        return this.data.length === 0
    }

    contains(element: T): boolean {
        return this.data.indexOf(element) !== -1
    }

    add(element: T): CustomSet<T> {
        if (!this.contains(element)) {
            this.data.push(element)
        }

        return this
    }

    subset(other: CustomSet<T>): boolean {
        return this.data.every(element => other.contains(element))
    }

    disjoint(other: CustomSet<T>): boolean {
        return !this.data.some(element => other.contains(element))
    }

    eql(other: CustomSet<T>): boolean {
        return this.subset(other) && other.subset(this)
    }

    union(other: CustomSet<T>): CustomSet<T> {
        return new CustomSet([...this.data, ...other.difference(this).data])
    }

    intersection(other: CustomSet<T>): CustomSet<T> {
        return new CustomSet(this.data.filter(element => other.contains(element)))
    }

    difference(other: CustomSet<T>): CustomSet<T> {
        return new CustomSet(this.data.filter(element => !other.contains(element)))
    }
}