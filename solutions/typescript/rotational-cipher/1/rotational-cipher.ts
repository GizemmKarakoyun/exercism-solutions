export function rotate(text: string, key: number): string {
    if (key < 0 || key > 26) {
        throw new Error('Key must be between 0 and 26');
    }

    function rotateLetter(letter: string, key: number): string {
        if (letter.match(/[a-zA-Z]/)) {
            const base = letter.match(/[A-Z]/) ? 'A' : 'a';
            const rotatedPosition = (letter.charCodeAt(0) - base.charCodeAt(0) + key) % 26 + base.charCodeAt(0);
            return String.fromCharCode(rotatedPosition);
        } else {
            return letter;
        }
    }

    let rotatedText = '';
    for (const char of text) {
        rotatedText += rotateLetter(char, key);
    }

    return rotatedText;
}