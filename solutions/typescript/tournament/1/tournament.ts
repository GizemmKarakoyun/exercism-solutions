type Score = {
  mp: number;
  w: number;
  d: number;
  l: number;
  p: number;
};

const DEFAULT_SCORES: Score = { mp: 0, w: 0, d: 0, l: 0, p: 0 };
const HEADER = 'Team                           | MP |  W |  D |  L |  P';

const formatNumber = (num: number) => num.toString().padStart(2, ' ');
const createScore = (): Score => ({ ...DEFAULT_SCORES });

export class Tournament {
  public tally(input: string): string {
    if (!input.trim()) return HEADER;

    const scores: Record<string, Score> = {};

    const addTeam = (name: string) => (scores[name] ??= createScore());

    for (const line of input.split('\n').filter(Boolean)) {
      const [first, second, result] = line.split(';');
      addTeam(first).mp++;
      addTeam(second).mp++;

      if (result === 'draw') {
        scores[first].d++;
        scores[second].d++;
        scores[first].p++;
        scores[second].p++;
      } else {
        const [winner, loser] = result === 'win' ? [first, second] : [second, first];
        scores[winner].w++;
        scores[winner].p += 3;
        scores[loser].l++;
      }
    }

    const sorted = Object.entries(scores).sort(([n1, s1], [n2, s2]) =>
      s1.p !== s2.p ? s2.p - s1.p : n1.localeCompare(n2)
    );

    return [
      HEADER,
      ...sorted.map(
        ([team, s]) =>
          `${team.padEnd(30)} | ${formatNumber(s.mp)} | ${formatNumber(s.w)} | ${formatNumber(s.d)} | ${formatNumber(s.l)} | ${formatNumber(s.p)}`
      )
    ].join('\n');
  }
}
