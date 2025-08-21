export const eggCount = (displayValue: number): number => {
  return displayValue
    .toString(2)
    .split('')
    .filter(n => n === '1')
    .length
}