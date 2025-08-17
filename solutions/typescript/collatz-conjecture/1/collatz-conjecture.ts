export function steps(n: number): number {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('Only positive integers are allowed')
  }

  let stepsCount = 0
  let current = n

  while (current !== 1) {
    if (current % 2 === 0) {
      current = current / 2
    } else {
      current = 3 * current + 1
    }
    stepsCount++
  }

  return stepsCount
}
