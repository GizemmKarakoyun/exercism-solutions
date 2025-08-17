export function recite(start_verse: number, end_verse: number) {
  const items = [
    "No zero item",
    "a Partridge in a Pear Tree.",
    "two Turtle Doves, ",
    "three French Hens, ",
    "four Calling Birds, ",
    "five Gold Rings, ",
    "six Geese-a-Laying, ",
    "seven Swans-a-Swimming, ",
    "eight Maids-a-Milking, ",
    "nine Ladies Dancing, ",
    "ten Lords-a-Leaping, ",
    "eleven Pipers Piping, ",
    "twelve Drummers Drumming, "
  ];
const cardinal_numbers = [
    "zeroth",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth"
  ];

  let answer = "";
  let verse_string = "";

  for (let i = start_verse; i <= end_verse; i++) {
    verse_string += `On the ${cardinal_numbers[i]} day of Christmas my true love gave to me: `;

    for (let j = i; j > 0; j--) {
      if (j > 1) {
        verse_string += `${items[j]}`;
      }
      else if (j === 1 && i === 1) {
        verse_string += `${items[j]}`;
      }
      else {
        verse_string += `and ${items[j]}`;
      }
    }
    answer += (verse_string + "\n");
    verse_string = "";
  }

  return answer;
}