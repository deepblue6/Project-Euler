/* problem 14
Longest Collatz Sequence
*/

let i = 0;
let chainArray = [];
let longestChainLength;

const collatzSequence = function (n) {
  chainArray.push(n);
  if (chainArray[chainArray.length - 1]) {
    if (chainArray.length > longestChainLength) {
      longestChainLength = chainArray.length;
      chainArray = [];
    }
  }
  if (n % 2 === 0) {
    chainArray.push(n / 2);
  }
  if (n % 2 === 1) {
    chainArray.push(3 * n + 1);
  }
  console.log(chainArray);
};

while (i < 10) {
  i = i + 1;
  collatzSequence(i);
}
