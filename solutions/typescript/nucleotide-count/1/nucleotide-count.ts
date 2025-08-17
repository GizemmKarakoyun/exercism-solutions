export function nucleotideCounts(strand: string) {
  const counts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }

  for (const nucleotide of strand) {
    if (!(nucleotide in counts)) {
      throw new Error('Invalid nucleotide in strand')
    }
    counts[nucleotide as keyof typeof counts]++
  }

  return counts
}
