const DAYS = [
  'the first day',
  'the second day',
  'the third day',
  'the fourth day',
  'the fifth day',
  'the sixth day',
  'the seventh day',
  'the eighth day',
  'the ninth day',
  'the tenth day',
  'the eleventh day',
  'the twelfth day',
]

const ITEMS = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming',
]

type Fn<T, R> = (x: T) => R

const memoize = <T, R> (f: Fn<T, R>): Fn<T, R> => {
  const memo = new Map<T, R>()
  const g = (x: T): R => {
    const result = f(x)
    memo.set(x, result)
    return result
  }
  return x => memo.get(x) ?? g(x)
}

const getItems = memoize((day: number): string => {
  if (day === 1) {
    return ITEMS[0]
  } else if (day === 2) {
    return ITEMS[1] + ', and ' + ITEMS[0]
  } else {
    return ITEMS[day - 1] + ', ' + getItems(day - 1)
  }
})

const getVerse = (day: number): string => {
  const items = getItems(day)
  return `On ${DAYS[day - 1]} of Christmas my true love gave to me: ${items}.`
}

const range = (from: number, to: number): number[] => {
  return Array.from({ length: to - from + 1 }, (_, i) => i + from)
}

export const recite = (from: number, to: number): string => {
  return range(from, to).map(getVerse).join('\n') + '\n'
}