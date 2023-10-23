// find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
let fifthPowersArray = [];

const sumOfFifthPowers = function (n) {
  let sumOfDigits = 0;
  let nString = n.toString();
  for (let i = 0; i < nString.length; i++)
    sumOfDigits += Number(nString[i]) ** 5;

  if (sumOfDigits === n) fifthPowersArray.push(n);
};

for (let z = 10; z < 1000000; z++) sumOfFifthPowers(z);

let arrSum = fifthPowersArray.reduce((a, b) => a + b, 0);

console.log(arrSum);
