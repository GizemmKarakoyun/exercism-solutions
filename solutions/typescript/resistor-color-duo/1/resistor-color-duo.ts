const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export function decodedValue(colors: string[]): number {
  // İlk iki rengi al (eğer 2'den fazlaysa fazlasını yok say)
  const [first, second] = colors;

  // İlk iki rengin indeksini al
  const firstDigit = COLORS.indexOf(first.toLowerCase());
  const secondDigit = COLORS.indexOf(second.toLowerCase());

  // İndekslerden sayı oluştur: (örnek: brown(1), black(0) => 10)
  return firstDigit * 10 + secondDigit;
}
