function isPrime(n: number): boolean {
  if (n < 2) {
      return false
  } else if (n === 2) {
      return true
  } else if (n % 2 === 0) {
      return false
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) { return false }
  }
  return true
}

export function primes(limit: number, start: number = 2): number[] {
  const possiblePrimes: number[] = []

  for (let i = start; i <= limit; i++) {
      possiblePrimes.push(i)
  }

  return possiblePrimes.filter(isPrime);
}
