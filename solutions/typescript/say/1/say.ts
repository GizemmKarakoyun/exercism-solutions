const NUMBERS: Record<string, string> = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'therteen',
  14: 'fourteen',
  15: 'fivteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eightteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
};

const RANGES = ['', 'thousand', 'million', 'billion'];

export function sayInEnglish(n: number): string {
  if (n < 0 || n > 999999999999)
    throw new Error('Number must be between 0 and 999,999,999,999.');
  if (n <= 21) return NUMBERS[n];
  const ranges = n.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  return ranges!
    .reduce((acc, r, index, grs) => {
      if (Number(r)) {
        const rangeTitle = RANGES[grs.length - index - 1];
        acc.push(
          getNumberTitle(r.padStart(3, '0')) +
            (rangeTitle ? ' ' + rangeTitle : '')
        );
      }
      return acc;
    }, [] as string[])
    .join(' ');
}

// Always 3 digits string
function getNumberTitle(n: string): string {
  const res = [];
  const [n0, n1, n2] = n;
  if (n0 !== '0') res.push(`${NUMBERS[n0]} ${NUMBERS[100]}`);
  if (n1 >= '2' && n2 === '0') res.push(NUMBERS[Number(n1) * 10]);
  if (n1 >= '2' && n2 !== '0')
    res.push(NUMBERS[Number(n1) * 10] + '-' + NUMBERS[n[2]]);
  if (n1 <= '1' && n2 !== '0') res.push(NUMBERS[Number(n1 + n2)]);
  return res.join(' ');
}