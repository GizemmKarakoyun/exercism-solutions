export function commands(n: number): string[] {
  const actions = ['wink', 'double blink', 'close your eyes', 'jump']
  const result: string[] = []

  for (let i = 0; i < actions.length; i++) {
    if ((n >> i) & 1) {
      result.push(actions[i])
    }
  }

  if ((n >> 4) & 1) {
    return result.reverse()
  }

  return result
}
