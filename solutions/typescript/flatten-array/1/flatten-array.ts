export function flatten(arr: (number | undefined)[]): number[] {
  return arr.flat(Infinity).filter((elem): elem is number => elem !== undefined)
}
