const plainAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const cipherAlphabet = 'zyxwvutsrqponmlkjihgfedcba'

function atbash(char: string): string {
  const index = plainAlphabet.indexOf(char)
  return index !== -1 ? cipherAlphabet[index] : char
}

export function encode(text: string): string {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '')
  const encoded = cleaned
    .split('')
    .map(c => (/[a-z]/.test(c) ? atbash(c) : c))
    .join('')

  return encoded
    .match(/.{1,5}/g)
    ?.join(' ') ?? ''
}

export function decode(text: string): string {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned
    .split('')
    .map(c => (/[a-z]/.test(c) ? atbash(c) : c))
    .join('')
}

