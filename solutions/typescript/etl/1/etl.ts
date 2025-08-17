export function transform(old: { [key: string]: string[] }): { [key: string]: number } {
  const result: { [key: string]: number } = {}

  for (const score in old) {
    const letters = old[score]
    for (const letter of letters) {
      result[letter.toLowerCase()] = Number(score)
    }
  }

  return result
}

