const ADJACENTS = [[1, 0], [-1, 0], [0, -1], [1, -1], [-1, 1], [0, 1]]
const X = 'X'
const O = 'O'
export class Board {
  private board: string[][]
  constructor(board: string[]) {
    this.board = board.map(line => line.trim().split(' '))
  }
  public winner(): string {
    return this.board.some((_, i) => this.isConnected(X, i, 0)) ? X :
      this.board[0].some((_, j) => this.isConnected(O, 0, j)) ? O : ''
  }
  private isConnected(player: string, x: number, y: number): boolean {
    switch (true) {
      case this.board[x][y] !== player: return false
      case player === O && x === this.board.length - 1: return true
      case player === X && y === this.board[0].length - 1: return true
    }
    this.board[x][y] = '.'
    return ADJACENTS.some(([ax, ay]) => this.board[x + ax] &&
      this.board[x + ax][y + ay] &&
      this.isConnected(player, x + ax, y + ay)
    )
  }
}