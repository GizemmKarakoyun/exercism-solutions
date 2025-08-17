export function primes(upperBound: number): number[] {
  const primeNumbers = [];
  const mask = new Array(upperBound + 1).fill(true);

  for (let i = 2; i <= upperBound; i++) {
    if (mask[i]) {
      primeNumbers.push(i);

      for (let j = i * i; j <= upperBound; j += i) {
        mask[j] = false;
      }
    }
  }

  return primeNumbers;
}
