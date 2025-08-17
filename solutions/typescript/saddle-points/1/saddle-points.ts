export function saddlePoints(
  matrix: number[][]
): Array<{ row: number; column: number }> {
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const rowMin = Math.max(...row);

    for (let j = 0; j < row.length; j++) {
      const col = matrix.map((r) => r[j]);
      const colMax = Math.min(...col);

      if (rowMin === colMax) {
        res.push({ row: i + 1, column: j + 1 });
      }
    }
  }
  return res;
}