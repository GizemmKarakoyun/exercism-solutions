export function translate(phrases: string): string {
    return phrases.split(' ').map(word => {
        switch (true) {
            case /^[aeiou]/.test(word): return slice(word, 0)
            case /^.qu|^thr|^sch/.test(word): return slice(word, 3)
            case /^ch|^qu|^th/.test(word): return slice(word, 2)
            default: return slice(word, 1)
        }
    })
    .join(' ')
}

function slice(word: string, n: number) {
    return word.slice(n) + word.slice(0, n) + 'ay'
}