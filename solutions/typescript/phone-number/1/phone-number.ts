export function clean(input: string): string {
  if (/[a-zA-Z]/.test(input)) {
    throw new Error('Letters not permitted');
  }

  if (/[^0-9\s().\-+]/.test(input)) {
    throw new Error('Punctuations not permitted');
  }

  const digits = input.replace(/\D/g, '');

  if (digits.length < 10) {
    throw new Error('Incorrect number of digits');
  }

  if (digits.length === 11) {
    if (digits[0] !== '1') {
      throw new Error('11 digits must start with 1');
    }
  }

  const normalized = digits.length === 11 ? digits.slice(1) : digits;

  if (normalized.length > 10) {
    throw new Error('More than 11 digits');
  }

  const areaCode = normalized.slice(0, 3);
  const exchangeCode = normalized.slice(3, 6);

  if (areaCode[0] === '0') {
    throw new Error('Area code cannot start with zero');
  }
  if (areaCode[0] === '1') {
    throw new Error('Area code cannot start with one');
  }
  if (exchangeCode[0] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  if (exchangeCode[0] === '1') {
    throw new Error('Exchange code cannot start with one');
  }

  return normalized;
}

