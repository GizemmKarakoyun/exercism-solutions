export function flatten(arr: (number | undefined)[]): number[] {
  return arr.flat(Infinity).filter((value): value is number => value !== undefined)
}
