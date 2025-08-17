export class Gigasecond {
  private startDate: Date

  constructor(startDate: Date) {
    // Orijinal nesneyi değiştirmemek için klonla
    this.startDate = new Date(startDate.getTime())
  }

  date(): Date {
    const gigasecond = 1_000_000_000 * 1000 // milisaniye cinsinden
    return new Date(this.startDate.getTime() + gigasecond)
  }
}
