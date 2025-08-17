export const encode = (arr: number[]): number[] => arr.flatMap(encodeNumber);
const encodeNumber = (num: number): number[] =>
  num
    .toString(2)
    .match(/(\d+?)(?=(\d{7})+(?!\d)|$)/g)!
    .map((n, i, arr) =>
      parseInt(`${i === arr.length - 1 ? 0 : 1}${n.padStart(7, '0')}`, 2)
    );
export const decode = (arr: number[]): number[] | never => {
  const res: number[] = [];
  const bytes: string[] = [];
  arr.forEach((item) => {
    const part = item.toString(2).padStart(8, '0');
    if (part[0] === '0') {
      const n = parseInt(bytes.concat(part.slice(1)).join(''), 2);
      res.push(n);
      bytes.length = 0;
    } else {
      bytes.push(part.slice(1));
    }
  });
  if (bytes.length) throw new Error('Incomplete sequence');
  return res;
};