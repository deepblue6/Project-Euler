/* problem 14
Longest Collatz Sequence
*/

// let chainArray = [];
// let longestChainLength = 0;

// const mutator = function (n) {
//   chainArray.push(n);
//   n % 2 === 0 ? chainArray.push(n / 2) : chainArray.push(3 * n + 1);
//   if(!chainArray.includes())
// };

// const collatzSequence = function (n) {
//   while (!chainArray.includes(1)) {
//     mutator(n);
//   }
// };

// for (let i = 0; i < 1000000; i++) {
//   collatzSequence(i);
// }
// console.log(longestChainLength);

// Attempt 2
// let i = 0;
// let chainArr = [];
// let longestChain = 0;

// const checkEven = function (num) {
//   chainArr.push(num / 2);
// };

// const checkOdd = function (num) {
//   chainArr.push(3 * num + 1);
// };

// console.log(checkEven(52));
// console.log(chainArr);

// // while (i < 1000000) {
// //   for (let i = 0; i < chainArr.length; i++) {
// //     if (chainArr[i] === 1) {
// //       if (chainArr.length > longestChain) {
// //         longestChain = chainArr.length;
// //       } else {
// //         chainArr = [];
// //       }
// //     }
// //   }
// //   if (i % 2 === 0) {
// //     checkEven();
// //   }
// //   if (i % 3 === 0) {
// //     checkOdd();
// //   }

// //   i++;
// //   console.log(chainArr);
// // }

let numbersArray = [];
let longestChain = 0;

const checkEvenOdd = function (num) {
  if (numbersArray.includes(1)) {
    numbersArray = [];
  }
  if (numbersArray.length > longestChain) {
    longestChain = numbersArray.length;
  }

  if (num % 2 === 0) {
    numbersArray.push(num);
    numbersArray.push(num / 2);
    num = num / 2;
    checkEvenOdd(num);
  }
  if (num % 2 === 1) {
    numbersArray.push(num);
    numbersArray.push(3 * num + 1);
    num = 3 * num + 1;
    checkEvenOdd(num);
  }
};

for (let i = 10; i > 0; i--) {
  checkEvenOdd(i);
}
