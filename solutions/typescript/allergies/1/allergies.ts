export class Allergies {
  private score: number

  private static allergens: string[] = [
    'eggs',        // 1
    'peanuts',     // 2
    'shellfish',   // 4
    'strawberries',// 8
    'tomatoes',    // 16
    'chocolate',   // 32
    'pollen',      // 64
    'cats'         // 128
  ]

  constructor(score: number) {
    // Mask score with 255 (8 bit) to ignore non-allergen bits
    this.score = score & 255
  }

  allergicTo(item: string): boolean {
    const index = Allergies.allergens.indexOf(item)
    if (index === -1) return false
    return (this.score & (1 << index)) !== 0
  }

  list(): string[] {
    return Allergies.allergens.filter((item, index) => (this.score & (1 << index)) !== 0)
  }
}
