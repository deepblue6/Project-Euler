/*
problem 38

pandigital multiples
*/

// const arr1 = {
// const appendedNums = [];
// };

let randStr = "";
let j = 0;
let biggestPan = 0;
console.log(Number(randStr), randStr.length);
while (randStr.length <= 9) {
  j++;
  console.log("HI");
  if (Number(randStr) > biggestPan) {
    biggestPan = randStr;
  }
  for (let i = 0; i < 9; i++) {
    randStr += j * i;
  }
  if (biggestPan.length > 9) {
    break;
  }
  console.log(biggestPan);
}
