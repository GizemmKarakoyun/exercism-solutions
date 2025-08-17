type Point = [number, number];
type Position = { start: Point, end: Point };
const ALL_DIRECTIONS: Point[] = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
export class WordSearch {
  private readonly _grid: string[];
  constructor(grid: string[]) {
    this._grid = grid;
  }
  public find(words: string[]):{ [key: string]: Position } {
    return words.reduce((result, word) => {
      const position = this._findWord(word);
      if (position) result[word] = position;
      return result;
    }, {} as { [key: string]: Position });
  }
  private _findWord(word: string): Position | null {
    for (let i = 0; i < this._grid.length; i++)
      for (let j = 0; j < this._grid[i].length; j++)
        for (const [dx, dy] of ALL_DIRECTIONS) {
          const position = this._search(i, j, word, dx, dy);
          if (position) return position;
        }
    return null;
  }
  private _search(sx: number, sy: number, word: string, dx: number, dy: number): Position | null {
    let [x, y, counter] = [sx, sy, 0];
    while (counter < word.length && !this._not_valid(x, y) && this._grid[x][y] === word[counter]) {
      [x, y, counter] = [x + dx, y + dy, counter + 1];
    }
    return counter === word.length ? { start: [sx + 1, sy + 1], end: [x - dx + 1, y - dy + 1] } : null;
  }
 private  _not_valid(x: number, y: number): boolean {
    return x < 0 || y < 0 || x >= this._grid.length || y >= this._grid[x].length;
  }
}
