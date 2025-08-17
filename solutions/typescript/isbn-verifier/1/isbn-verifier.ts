export function isValid(isbn: string): boolean {
  isbn = isbn.replace(/-/g, '')
  if (!/^\d{9}[X0-9]$/.test(isbn)) return false
  const sum = [...isbn].reduce((acc, c, i) => {
    return acc + (10 - i) * (c === 'X' ? 10 : Number(c))
  }, 0)
  return sum % 11 === 0
}