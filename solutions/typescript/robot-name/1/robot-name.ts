export class Robot {
  private _name: string
  public static _reservedNames: Set<string> = new Set()

  constructor() {
    this._name = this.generateName()
  }

  public get name(): string {
    return this._name
  }

  // Rastgele ve benzersiz isim oluşturur
  private generateName(): string {
    let randomName: string
    do {
      randomName = this.randomName()
    } while (Robot._reservedNames.has(randomName))
    Robot._reservedNames.add(randomName)
    return randomName
  }

  // İki büyük harf ve üç rakamdan oluşan rastgele isim üretir
  private randomName(): string {
    let name = ''
    // 2 tane rastgele büyük harf ekle
    for (let i = 0; i < 2; i++) {
      name += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
    }
    // 3 tane rastgele rakam ekle
    for (let i = 0; i < 3; i++) {
      name += '0123456789'[Math.floor(Math.random() * 10)]
    }
    return name
  }

  // Robot ismini benzersiz yeni bir isimle değiştirir
  public resetName(): void {
    this._name = this.generateName()
  }

  // Testler veya başlangıç için rezerve edilmiş isimleri temizler
  public static releaseNames(): void {
    Robot._reservedNames.clear()
  }
}

