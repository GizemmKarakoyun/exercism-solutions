class Bucket {
  constructor(public capacity: number, public level: number) {}
  empty = (): void => void (this.level = 0)
  fill = (): void => void (this.level = this.capacity)
  isFull = (): boolean => this.level === this.capacity
  isEmpty = (): boolean => this.level === 0
  transfer = (other: Bucket): void => {
    let diff = Math.min(this.level, other.capacity - other.level)
    other.level += diff
    this.level -= diff
  }
}
const MAX_STEPS = 100
export class TwoBucket {
  private buckets: [Bucket, Bucket]
  constructor(
    one: number,
    two: number,
    public goal: number,
    private startBucket: 'one' | 'two',
  ) {
    this.buckets = [new Bucket(one, 0), new Bucket(two, 0)]
    if (this.startBucket === 'two') this.buckets.reverse()
  }
  moves(): number {
    let steps = 0
    let [first, second] = this.buckets
    while (first.level !== this.goal && second.level !== this.goal) {
      if (second.isFull()) second.empty()
      else if (first.isEmpty()) first.fill()
      else if (second.capacity === this.goal) second.fill()
      else first.transfer(second)
      steps++
      if (steps > MAX_STEPS) throw new Error('Reached max steps. Could not solve')
    }
    return steps
  }
  get goalBucket(): 'one' | 'two' {
    return this.buckets[this.startBucket === 'one' ? 0 : 1].level === this.goal ? 'one' : 'two'
  }
  get otherBucket(): number {
    return (this.buckets[0].level === this.goal ? this.buckets[1] : this.buckets[0]).level
  }
}


