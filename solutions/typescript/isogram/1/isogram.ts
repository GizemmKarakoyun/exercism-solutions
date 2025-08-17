export function isIsogram(input: string): boolean {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, ''); // sadece a-z harflerini al
  const seen = new Set<string>();
  for (const char of cleaned) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  return true;
}

