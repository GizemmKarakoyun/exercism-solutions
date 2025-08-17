type Position = readonly [number, number];

type Positions = {
  white: Position;
  black: Position;
};

const BOARD_SIZE = 8; 

function isOnBoard([y, x]: Position): boolean {
  return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

export class QueenAttack {
  public readonly white: Position;
  public readonly black: Position;
  
  constructor({ white = [7, 3], black = [0, 3] }: Partial<Positions> = {}) {
    if (!isOnBoard(white) || !isOnBoard(black)) {
      throw new Error("Queen must be placed on the board");
    }

    if (white[0] === black[0] && white[1] === black[1]) {
      throw new Error("Queens cannot share the same space");
    }

    this.white = white;
    this.black = black;
  }

  toString(): string {
    const board: string[][] = Array.from({ length: BOARD_SIZE }, () =>
      Array(BOARD_SIZE).fill("_")
    );

    const [wY, wX] = this.white;
    const [bY, bX] = this.black;

    board[wY][wX] = "W";
    board[bY][bX] = "B";

    return board.map(row => row.join(" ")).join("\n");
  }

  get canAttack(): boolean {
    const [wY, wX] = this.white;
    const [bY, bX] = this.black;

    const sameRow = wY === bY;
    const sameCol = wX === bX;
    const sameDiagonal = Math.abs(wY - bY) === Math.abs(wX - bX);

    return sameRow || sameCol || sameDiagonal;
  }
}
