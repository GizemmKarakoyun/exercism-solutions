export class Squares {
  private n: number

  constructor(n: number) {
    this.n = n
  }

  // 1 + 2 + ... + n toplamının karesi
  get squareOfSum(): number {
    const sum = (this.n * (this.n + 1)) / 2
    return sum * sum
  }

  // 1^2 + 2^2 + ... + n^2 toplamı
  get sumOfSquares(): number {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6
  }

  // squareOfSum - sumOfSquares
  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
