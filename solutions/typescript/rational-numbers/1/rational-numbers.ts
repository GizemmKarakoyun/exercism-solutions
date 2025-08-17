export class Rational {
  numerator: number
  denominator: number

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) throw new Error("Denominator cannot be zero")

    const sign = denominator < 0 ? -1 : 1
    const gcd = Rational.gcd(numerator, denominator)

    this.numerator = (numerator / gcd) * sign
    this.denominator = Math.abs(denominator / gcd)
  }

  static gcd(a: number, b: number): number {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b !== 0) {
      [a, b] = [b, a % b]
    }
    return a
  }

  add(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator + r.numerator * this.denominator,
      this.denominator * r.denominator
    )
  }

  sub(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator - r.numerator * this.denominator,
      this.denominator * r.denominator
    )
  }

  mul(r: Rational): Rational {
    return new Rational(this.numerator * r.numerator, this.denominator * r.denominator)
  }

  div(r: Rational): Rational {
    if (r.numerator === 0) throw new Error("Cannot divide by zero")
    return new Rational(this.numerator * r.denominator, this.denominator * r.numerator)
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  reduce(): Rational {
    return new Rational(this.numerator, this.denominator) // constructor already reduces
  }

  exprational(power: number): Rational {
    if (power >= 0) {
      return new Rational(this.numerator ** power, this.denominator ** power)
    } else {
      return new Rational(this.denominator ** -power, this.numerator ** -power)
    }
  }

  expreal(base: number): number {
    return base ** (this.numerator / this.denominator)
  }
}
