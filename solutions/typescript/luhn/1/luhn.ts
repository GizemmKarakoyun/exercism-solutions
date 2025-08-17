export function valid(input: string): boolean {
  // 1. Boşlukları kaldır
  const sanitized = input.replace(/\s/g, '');

  // 2. Uzunluğu 2'den azsa geçersiz
  if (sanitized.length <= 1) return false;

  // 3. Sadece rakam içermeli
  if (/[^0-9]/.test(sanitized)) return false;

  // 4. Luhn algoritması uygulanıyor
  const digits = sanitized
    .split('')
    .reverse()
    .map((digit) => parseInt(digit, 10));

  const sum = digits.reduce((acc, digit, index) => {
    if (index % 2 === 1) {
      let doubled = digit * 2;
      if (doubled > 9) doubled -= 9;
      return acc + doubled;
    } else {
      return acc + digit;
    }
  }, 0);

  // 5. Toplam 10'a bölünüyorsa geçerli
  return sum % 10 === 0;
}

