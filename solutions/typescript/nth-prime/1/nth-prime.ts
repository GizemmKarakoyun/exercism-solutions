export function nth(count: number): number {
  if (count === 0){
    throw new Error('Prime is not possible')
  }
  let countPrimeNumbers = 0
  let num = 1
  while (countPrimeNumbers !== count){
    num++
    checkPrime(num) && countPrimeNumbers++
  }
   return num
}

function checkPrime(num: number): boolean {
    if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}