export function isArmstrongNumber(number: number | bigint): boolean {
  const digits: number[] = []

  for (const c of number.toString()) {
    digits.push(Number(c))
  }

  return BigInt(number) === digits
    .map(BigInt)
    .reduce((acc, cur) => { return acc + cur ** BigInt(digits.length) }, BigInt(0))
}