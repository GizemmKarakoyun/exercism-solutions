const order_of_animals = [
  ['fly', "I don't know why she swallowed the fly. Perhaps she'll die."],
  ['spider', "It wriggled and jiggled and tickled inside her."],
  ['bird', "How absurd to swallow a bird!"],
  ['cat', "Imagine that, to swallow a cat!"],
  ['dog', "What a hog, to swallow a dog!"],
  ['goat', "Just opened her throat and swallowed a goat!"],
  ['cow', "I don't know how she swallowed a cow!"],
  ['horse', "She's dead, of course!"]
];
export function verse(verse_number: number): string {
  const creature = order_of_animals[verse_number - 1][0];
  const message = order_of_animals[verse_number - 1][1];
  let song = `I know an old lady who swallowed a ${creature}.\n${message}\n`;
  if (verse_number === 1 || verse_number === 8) {
    return song;
  }
  for (let i = verse_number - 1; i >= 1; i--) {
    song += `She swallowed the ${order_of_animals[i][0]} to catch the ${order_of_animals[i-1][0]}${i === 2 ? " that wriggled and jiggled and tickled inside her": ""}.\n`;
  }
  song += `${order_of_animals[0][1]}\n`;
  return song;
}
export function verses(start_verse: number, end_verse: number) {
  let song = '';
  
  for (let i = start_verse; i <= end_verse; i++) {
    song += verse(i);
    if (i !== end_verse) song += "\n";
  }
  
  return song;
}
