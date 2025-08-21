export function calculatePrimeFactors(num: number) : number[] {
  const factor: number[] = [];
  if (num < 2) return factor;
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            num /= i;
            factor.push(i);
        }
    }
    return factor;
}