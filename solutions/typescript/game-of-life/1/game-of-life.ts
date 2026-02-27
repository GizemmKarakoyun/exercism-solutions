export class GameOfLife {
  public matrix: number[][];
  public generation = 0;
  public rows: number;
  public cols: number;

  constructor(matrix: number[][]) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0]?.length ?? 0;
  }


  private countNeighbors(row: number, col: number): number {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [ 0, -1],          [ 0, 1],
      [ 1, -1], [ 1, 0], [ 1, 1]
    ];

    return directions.reduce((count, [dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 && newRow < this.rows &&
        newCol >= 0 && newCol < this.cols &&
        this.matrix[newRow][newCol] === 1
      ) {
        return count + 1;
      }
      return count;
    }, 0);
  }


  public tick(): void {
    this.generation++;

    const newMatrix: number[][] = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(0)
    );

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const neighbors = this.countNeighbors(i, j);
        const isAlive = this.matrix[i][j] === 1;

        
        if ((isAlive && (neighbors === 2 || neighbors === 3)) ||
            (!isAlive && neighbors === 3)) {
          newMatrix[i][j] = 1;
        }
      }
    }

    this.matrix = newMatrix;
  }


  public state(): number[][] {
    return this.matrix.map(row => [...row]);
  }
}
