export function isPangram(sentence: string): boolean {
  // Küçük harfe çevir, harf olmayanları temizle
  const lettersOnly = sentence.toLowerCase().replace(/[^a-z]/g, '');

  // Harflerin benzersiz kümesini oluştur
  const uniqueLetters = new Set(lettersOnly);

  // Eğer 26 farklı harf varsa pangramdır
  return uniqueLetters.size === 26;
}
