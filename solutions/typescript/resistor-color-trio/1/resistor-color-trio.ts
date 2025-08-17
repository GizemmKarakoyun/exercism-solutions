const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export function decodedResistorValue(colors: string[]): string {
  const [first, second, third] = colors;

  const firstDigit = COLORS.indexOf(first.toLowerCase());
  const secondDigit = COLORS.indexOf(second.toLowerCase());
  const multiplier = COLORS.indexOf(third.toLowerCase());

  const baseValue = firstDigit * 10 + secondDigit;
  const value = baseValue * Math.pow(10, multiplier);

  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`;
  } else if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`;
  } else if (value >= 1_000) {
    return `${value / 1_000} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}

