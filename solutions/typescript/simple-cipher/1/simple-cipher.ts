const ABC = 'abcdefghijklmnopqrstuvwxyz';
const CODE_A = ABC.charCodeAt(0);

export class SimpleCipher {
  public key: string;

  constructor(key: string = '') {
    if (key && !/^[a-z]+$/.test(key)) {
      throw new Error('Key must be lowercase letters only');
    }
    this.key = key || this.generateKey();
  }

  encode(input: string): string {
    return this.getCipher(input, false);
  }

  decode(input: string): string {
    return this.getCipher(input, true);
  }

  private generateKey(length = 100): string {
    return Array.from(
      { length },
      () => ABC[Math.floor(Math.random() * ABC.length)]
    ).join('');
  }

  private getCipher(input: string, isReverse = false): string {
    const res: string[] = [];
    const shiftDirection = isReverse ? -1 : 1;

    for (let i = 0; i < input.length; i++) {
      const inputCharCode = input.charCodeAt(i) - CODE_A;
      const keyCharCode = this.key.charCodeAt(i % this.key.length) - CODE_A;
      const shifted =
        (inputCharCode + shiftDirection * keyCharCode + 26) % 26;
      res.push(String.fromCharCode(shifted + CODE_A));
    }

    return res.join('');
  }
}
