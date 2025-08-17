interface OperationMap {
  [key: string]: string;
}

const OPS: OperationMap = {
  "plus": "+",
  "minus": "-",
  "multiplied by": "*",
  "divided by": "/",
};

export function answer(question: string): number {
  if (!question.startsWith("What is") || !question.endsWith("?")) {
    throw new Error("Unknown operation");
  }

  question = question.slice(8, -1).trim();
  if (question === "") throw new Error("Syntax error");

  // Bu satırları önce geçici olarak işaretle
  const multiWordOps = Object.keys(OPS).filter(op => op.includes(" "));
  for (const op of multiWordOps) {
    const regex = new RegExp(op, "g");
    question = question.replace(regex, OPS[op]);
  }

  const words = question.split(" ");
  let parsed: (string | number)[] = [];

  for (const word of words) {
    if (!isNaN(Number(word))) {
      parsed.push(Number(word));
    } else if (Object.values(OPS).includes(word)) {
      parsed.push(word);
    } else if (Object.keys(OPS).includes(word)) {
      // Tek kelimelik, ama geçerli operatör (örnek: "plus")
      parsed.push(OPS[word]);
    } else {
      // Burada "cubed", "President" gibi şeyleri yakalarız
      throw new Error("Unknown operation");
    }
  }

  if (parsed.length < 1 || typeof parsed[0] !== "number") {
    throw new Error("Syntax error");
  }

  let result = parsed[0] as number;

  for (let i = 1; i < parsed.length; i += 2) {
    const operator = parsed[i];
    const next = parsed[i + 1];

    if (typeof operator !== "string" || typeof next !== "number") {
      throw new Error("Syntax error");
    }

    switch (operator) {
      case "+":
        result += next;
        break;
      case "-":
        result -= next;
        break;
      case "*":
        result *= next;
        break;
      case "/":
        result /= next;
        break;
      default:
        throw new Error("Unknown operation");
    }
  }

  return result;
}
