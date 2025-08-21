export function parse(phrase: string): string {
  // Noktalama işaretlerini kaldır (tire hariç)
  const cleaned = phrase.replace(/[^a-zA-Z0-9-\s]/g, '')

  // Kelimeleri boşluk ve tire ile ayır
  const words = cleaned.split(/[\s-]+/).filter(Boolean)

  // Kelimenin tamamı büyük harf ise, olduğu gibi kullan (bir harf olarak)
  // Değilse camelCase parçala
  function splitCamelCase(word: string): string[] {
    if (/^[A-Z]+$/.test(word)) {
      return [word]
    }
    return word.split(/(?=[A-Z])/)
  }

  // Her kelimeyi camelCase parçalarına ayır, sonra ilk harfleri al
  const acronymLetters = words.flatMap(word => {
    const parts = splitCamelCase(word)
    return parts.map(part => part[0])
  })

  // Büyük harfe çevir ve birleştir
  return acronymLetters.join('').toUpperCase()
}
