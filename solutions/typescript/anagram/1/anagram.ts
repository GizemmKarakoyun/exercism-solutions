export class Anagram {
  private subject: string;
  private normalizedSubject: string;
  private sortedSubject: string;

  constructor(subject: string) {
    this.subject = subject;
    this.normalizedSubject = subject.toLowerCase();
    this.sortedSubject = Anagram.sortString(this.normalizedSubject);
  }

  // Yardımcı: bir stringi alfabetik sıraya göre sırala
  private static sortString(str: string): string {
    return str.split('').sort().join('');
  }

  // Anagram kontrolü: aynı harfler ve aynı uzunluk ama farklı kelimeler
  private isAnagram(candidate: string): boolean {
    const normalizedCandidate = candidate.toLowerCase();
    if (normalizedCandidate === this.normalizedSubject) {
      // Kendisi değil
      return false;
    }
    if (normalizedCandidate.length !== this.normalizedSubject.length) {
      return false;
    }
    return Anagram.sortString(normalizedCandidate) === this.sortedSubject;
  }

  // matches fonksiyonu: tekli string veya çoklu string parametre alabilir
  matches(...candidates: string[]): string[] {
    const matches: string[] = [];
    for (const candidate of candidates) {
      // Adayda birden fazla kelime varsa (örneğin 'go Go GO'), ayırıp tek tek kontrol et
      const splitCandidates = candidate.split(/\s+/);
      for (const singleCandidate of splitCandidates) {
        if (this.isAnagram(singleCandidate)) {
          matches.push(singleCandidate);
        }
      }
    }
    return matches;
  }
}
