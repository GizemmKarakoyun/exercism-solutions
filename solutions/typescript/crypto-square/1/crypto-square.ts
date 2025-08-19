export class Crypto {
  constructor(private plainText: string) {
    this.plainText = plainText.replace(/\W/gi, '').toLowerCase();
  }

  get ciphertext(): string {
    const side = Math.sqrt(this.plainText.length);
    const c = Math.ceil(side);
    const r = Math.round(side);

    const res = [];
    for (let i = 0; i < c; i++) {
      const row = [];
      for (let j = 0; j < r; j++) {
        row.push(this.plainText[i + j * c] || ' ');
      }
      res.push(row.join(''));
    }
    return res.join(' ');
  }
}
