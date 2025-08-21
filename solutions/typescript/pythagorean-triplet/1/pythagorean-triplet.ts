type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

export function triplets({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
  const results: Triplet[] = []
  maxFactor = maxFactor ?? sum

  for (let a = minFactor; a <= maxFactor; a++) {
    for (let b = a + 1; b <= maxFactor; b++) {
      const c = sum - a - b
      if (c <= b || c > maxFactor) continue

      if (a * a + b * b === c * c) {
        results.push(new Triplet(a, b, c))
      }
    }
  }

  return results
}

class Triplet {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c]
  }
}
