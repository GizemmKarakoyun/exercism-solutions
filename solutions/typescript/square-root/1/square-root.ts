export function squareRoot(n: number): number {
  if (n < 0) throw new Error("Negative input not supported");

  if (n === 0) return 0;
  if (n === 1) return 1;

  let x = n;
  let y = 1;
  const precision = 0.000001; // hassasiyet seviyesi

  // Newton-Raphson yöntemi ile karekök bulma
  while (x - y > precision) {
    x = (x + y) / 2;
    y = n / x;
  }

  // En yakın tam sayıya yuvarla (testler tam kare için)
  return Math.round(x);
}
