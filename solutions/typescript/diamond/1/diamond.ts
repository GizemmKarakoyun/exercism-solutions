const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function makeDiamond(character: string): string {
  let idx = letters.indexOf(character)

  let res: string[] = [];
  for (let i = 0; i <= idx; i++) {
    let s = ' '.repeat(idx - i) + letters[i]
    if (i > 0) {
      s += ' '.repeat(2 * i - 1)
      s += letters[i]
    }
    s += ' '.repeat(idx - i)
    res.push(s)
  }

  for (let i = idx - 1; i >= 0; i--) {
    res.push(res[i])
  }

  return res.join('\n') + '\n'
}