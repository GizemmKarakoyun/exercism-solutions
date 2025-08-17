export function annotate(field: string[]): string[] {
  const rows = field.length;
  const cols = field[0]?.length ?? 0;
  const result = Array(rows).fill('');

  const isBomb = (r: number, c: number) =>
    r >= 0 && r < rows && c >= 0 && c < cols && field[r][c] === '*';

  for (let i = 0; i < rows; i++) {
    let rowResult = '';
    for (let j = 0; j < cols; j++) {
      if (field[i][j] === '*') {
        rowResult += '*';
      } else {
        let count = 0;
        for (let h = -1; h <= 1; h++) {
          for (let w = -1; w <= 1; w++) {
            if (h === 0 && w === 0) continue; // kendi hücresini sayma
            if (isBomb(i + h, j + w)) count++;
          }
        }
        rowResult += count > 0 ? count.toString() : ' ';
      }
    }
    result[i] = rowResult;
  }

  return result;
}
