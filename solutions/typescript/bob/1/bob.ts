export function hey(remark: string): string {
  const trimmed = remark.trim();

  // Boşsa
  if (trimmed === '') return 'Fine. Be that way!';

  const isQuestion = trimmed.endsWith('?');
  const hasLetters = /[a-zA-Z]/.test(trimmed);
  const isShouting = hasLetters && trimmed === trimmed.toUpperCase();

  if (isShouting && isQuestion) return "Calm down, I know what I'm doing!";
  if (isShouting) return 'Whoa, chill out!';
  if (isQuestion) return 'Sure.';

  return 'Whatever.';
}
