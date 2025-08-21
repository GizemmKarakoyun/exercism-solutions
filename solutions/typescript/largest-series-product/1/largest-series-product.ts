const tails = (str: string, span: number) => Array.from({ length: str.length - span + 1 }, (_, i) => str.slice(i, i + span));
const digitProduct = (str: string) => str.split("").map(Number).reduce((acc, n) => acc * n, 1);
const max = (arr: number[]) => arr.reduce((acc, n) => Math.max(acc, n), -Infinity);
const assert = (what: any, why: string) => { if (!what) throw new Error(why); return true; };
export const largestProduct = (str: string, span: number) => 
  assert(str.length >= span, "Span must be smaller than string length") &&
  assert(str.match(/^[0-9]+$/), "Digits input must only contain digits") &&
  assert(span > 0, "Span must not be negative") &&
  max(tails(str, span).map(digitProduct));
