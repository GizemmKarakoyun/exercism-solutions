const transcriptionMap: Record<string, string> = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}

export function toRna(dna: string): string {
  let rna = ''

  for (const nucleotide of dna) {
    const complement = transcriptionMap[nucleotide]
    if (!complement) {
      throw new Error('Invalid input DNA.')
    }
    rna += complement
  }

  return rna
}

