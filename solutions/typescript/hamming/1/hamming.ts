export function compute(s1: string, s2: string): number {
  if (s1.length !== s2.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  let distance = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      distance++
    }
  }
  return distance
}
