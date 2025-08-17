function generateDigits(outputBase: number, value: number, dest: number[]): void {
  const lastDigit = value % outputBase;
  if (value >= outputBase) {
    generateDigits(outputBase, (value - lastDigit) / outputBase, dest);
  }
  dest.push(lastDigit);
}

export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  if (inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }
  if (outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }
  if (digits.length === 0 || (digits.length > 1 && digits[0] === 0)) {
    throw new Error('Input has wrong format');
  }
  let value = 0;
  for (let digit of digits) {
    if (digit < 0 || digit >= inputBase) {
      throw new Error('Input has wrong format');
    }
    value = value * inputBase + digit;
  }
  let result: number[] = [];
  generateDigits(outputBase, value, result);
  return result;
}
