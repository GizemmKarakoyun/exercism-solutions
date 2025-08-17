export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const mapping: Record<string, string> = {
    ')': '(',
    '}': '{', 
    ']': '[' };
  const open = new Set(['(', '{', '[']);

  for (const char of input) {
    if (open.has(char)) {
      stack.push(char);
    } else if (char in mapping) {
      if (stack.pop() !== mapping[char]) return false;
    }
  }

  return stack.length === 0;
}


