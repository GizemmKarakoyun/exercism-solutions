export function transpose(text: string[]): string[] {
    if(text.length === 0) {
        return []
    }

    const matrix = text.map(line => [...line]),
        lengths = matrix.map(line => line.length)
    
    return [...Array(Math.max(...lengths)).keys()]
        .map(j => matrix.map((row, i) => row[j] ? row[j] :
            j < Math.max(...lengths.slice(i)) ? ' ' : '')
        )
        .map(row => row.join(''))
}