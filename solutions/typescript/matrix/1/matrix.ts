export class Matrix {
  rows: number[][];
  columns: number[][];

  constructor(matrixString: string) {
    // Satırları oluştur
    this.rows = matrixString
      .trim()
      .split('\n')
      .map(row =>
        row
          .trim()
          .split(/\s+/)
          .map(num => Number(num))
      );

    // Sütunları oluştur
    const numColumns = this.rows[0].length;
    this.columns = [];

    for (let i = 0; i < numColumns; i++) {
      this.columns.push(this.rows.map(row => row[i]));
    }
  }
}
