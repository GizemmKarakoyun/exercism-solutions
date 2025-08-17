export function sum(factors: number[], limit: number): number {
  const multiples = new Set<number>()

  for (const factor of factors) {
    if (factor === 0) continue // 0'ın katlarını sayma

    for (let multiple = factor; multiple < limit; multiple += factor) {
      multiples.add(multiple)
    }
  }

  let total = 0
  for (const num of multiples) {
    total += num
  }

  return total
}
