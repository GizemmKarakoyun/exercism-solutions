const ROUNDS = 10;
const PINS = 10;

const sum = (ns: number[]) => ns.reduce((s, n) => s + n, 0);

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

function ended(frames: number[][], round: number): boolean {
  if (round < ROUNDS) return false;

  const last = frames[ROUNDS - 1];
  const throws = last.length;

  if (throws < 2) return false;
  if (throws < 3 && last[0] === PINS) return false; // strike in first throw
  if (throws < 3 && last[0] + last[1] === PINS) return false; // spare

  return true;
}

export class Bowling {
  protected frames: number[][] = new Array(ROUNDS).fill(null).map(() => []);
  protected round: number = 1;

  public roll(pins: number): void {
    const { frames, round } = this;
    const frame = frames[round - 1];

    assert(!ended(frames, round), "Cannot roll after game is over");
    assert(pins <= PINS - (sum(frame) % PINS), "Pin count exceeds pins on the lane");
    assert(pins >= 0, "Negative roll is invalid");

    frame.push(pins);

    if (round < ROUNDS && (frame.length === 2 || sum(frame) === PINS)) {
      this.round += 1;
    }
  }

  public score(): number {
    const { frames, round } = this;

    assert(ended(frames, round), "Score cannot be taken until the end of the game");

    return frames.reduce((total, frame, i) => {
      let value = sum(frame);

      if (i === ROUNDS - 1) return total + value;

      if (frame[0] === PINS) { // strike
        const rolls = frames.slice(i + 1, i + 3).flat();
        value += sum(rolls.slice(0, 2));
      } else if (frame[0] + frame[1] === PINS) { // spare
        value += frames[i + 1][0];
      }

      return total + value;
    }, 0);
  }
}