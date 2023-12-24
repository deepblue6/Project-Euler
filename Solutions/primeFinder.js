// Check if number is prime
let nthPrime = (n) => {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const twoMillPrimeSum = (n) => {
  let sum = 0;
  let count = 2;
  while (count < 2000000) {
    if (nthPrime(count)) sum += count;
    count++;
  }
  console.log(sum);
};
twoMillPrimeSum();

// let sumNthPrime = (n) => {
//   let thePrime = 0;
//   let c = 0;
//   let primeCount = 0;
//   while (primeCount < 10001) {
//     if (nthPrime(c)) {
//       thePrime = c;
//       primeCount++;
//     }
//     c++;
//   }
//   return thePrime;
// };
// console.log(sumNthPrime(1));
