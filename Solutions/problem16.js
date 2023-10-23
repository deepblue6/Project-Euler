// Find the sum of the numbers in the 2^1000
const bigNum = (2n ** 1000n).toString();
let sum = 0;
for (let i = 0; i < bigNum.length; i++) sum += Number(bigNum.slice(i, i + 1));
console.log(sum);
