export class Triangle {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  // Üçgen olup olmadığını kontrol eden yardımcı fonksiyon
  private isValid(): boolean {
    // Üç kenarın sıfırdan büyük olması lazım
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) return false
    // Üçgen eşitsizliği: Her kenar diğer iki kenarın toplamından küçük olmalı
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.b + this.c > this.a
    )
  }

  get isEquilateral(): boolean {
    // Önce geçerli bir üçgen mi ona bak
    if (!this.isValid()) return false
    // Tüm kenarlar eşit mi?
    return this.a === this.b && this.b === this.c
  }

  get isIsosceles(): boolean {
    if (!this.isValid()) return false
    // En az iki kenar eşit mi?
    return this.a === this.b || this.b === this.c || this.a === this.c
  }

  get isScalene(): boolean {
    if (!this.isValid()) return false
    // Hiçbir kenar eşit değil mi?
    return this.a !== this.b && this.b !== this.c && this.a !== this.c
  }
}
