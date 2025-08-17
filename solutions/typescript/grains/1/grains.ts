export function square(n: number): bigint {
  if (n < 1 || n > 64) {
    throw new Error('Square must be between 1 and 64');
  }
  return 2n ** BigInt(n - 1);
}

export function total(): bigint {
  // 2^64 - 1
  return (2n ** 64n) - 1n;
}
