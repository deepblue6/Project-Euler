let isPrime = (n) => {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// let checkCircular = (n) => {
//     for(let i = 0; i<n.toString().length; i++) {
//         for(let j = 0; j<n.toString().length; j++) {

//         }
//     }

// }

// let circularPrimes = 0
// let c = 2
// while(c<1000000) {
//     for(let i = 0; i<)

// }
