export class Clock {
  private minutesSinceMidnight: number

  constructor(hour: number, minute: number = 0) {
    this.minutesSinceMidnight = Clock.normalizeTime(hour * 60 + minute)
  }

  static normalizeTime(totalMinutes: number): number {
    const MINUTES_IN_DAY = 24 * 60
    // Dairesel pozitif mod hesaplaması (negatifleri düzgün sarar)
    return ((totalMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY
  }

  toString(): string {
    const hours = Math.floor(this.minutesSinceMidnight / 60)
    const minutes = this.minutesSinceMidnight % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  plus(minutes: number): Clock {
    return new Clock(0, this.minutesSinceMidnight + minutes)
  }

  minus(minutes: number): Clock {
    return new Clock(0, this.minutesSinceMidnight - minutes)
  }

  equals(other: Clock): boolean {
    return this.minutesSinceMidnight === other.minutesSinceMidnight
  }
}

