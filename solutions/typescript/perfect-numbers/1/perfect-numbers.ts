export function classify(n: number): 'perfect' | 'abundant' | 'deficient' {
  if (n < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sum = 0
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  if (sum === n) return 'perfect'
  if (sum > n) return 'abundant'
  return 'deficient'
}
