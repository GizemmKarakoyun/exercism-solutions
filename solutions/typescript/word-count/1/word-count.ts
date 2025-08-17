export function count(input: string): Map<string, number> {
  const counts = new Map<string, number>();

  // Tüm harfleri küçük harfe çevir
  const normalized = input.toLowerCase();

  // Kelime tanımını yapan RegEx: 
  // Kelimeler ya sadece harf/rakam içerebilir
  // ya da ortasında tek bir kesme işareti olabilir (örn: don't, you're)
  const wordRegex = /\b[a-z0-9]+(?:'[a-z0-9]+)?\b/g;

  const matches = normalized.match(wordRegex);

  if (matches) {
    for (const word of matches) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  }

  return counts;
}
