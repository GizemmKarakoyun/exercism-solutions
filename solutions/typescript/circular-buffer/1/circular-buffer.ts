export default class CircularBuffer<T> {
  private values : T[] = [];
  
  constructor(private maxLength: number = 0) {}

  write(value: T): void {
    if (this.values.length === this.maxLength) throw new BufferFullError();
    this.values.push(value);
  }

  read(): T {
    if (this.values.length === 0) throw new BufferEmptyError();
    return this.values.shift()!;
  }

  forceWrite(value: T): void {
    if (this.values.length < this.maxLength) {
      this.values.push(value);
      return;
    }
    
    this.values.shift();
    this.values.push(value);
  }

  clear(): void {
    this.values = [];
  }
}

export class BufferFullError extends Error {
  constructor() {
    super()
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super()
  }
}