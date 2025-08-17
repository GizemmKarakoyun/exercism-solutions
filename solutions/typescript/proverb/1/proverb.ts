export function proverb(...input: string[]) {
  const n = input.length
  if (n < 2) throw new Error('Not enough')
  let res = ''
  for (let i = 0; i < n; i++) {
    if (input[i+1]) res += `For want of a ${input[i]} the ${input[i+1]} was lost.\n`
    else res += `And all for the want of a ${input[0]}.`
  }
  return res
}