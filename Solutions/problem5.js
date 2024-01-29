// for (let i = 20; i <= 232792560; i++) {
//   if (
//     i % 2 == 0 &&
//     i % 3 == 0 &&
//     i % 5 == 0 &&
//     i % 7 == 0 &&
//     i % 11 == 0 &&
//     i % 13 == 0 &&
//     i % 17 == 0 &&
//     i % 19 == 0
//   ) {
//     console.log(i);
//   }
// }

// Prime factorization
let newNum;
// function primeFactor(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0)

//   }
// }

let i = 20;
const divNums = [20, 19, 18, 17, 16, 14, 13, 11];
while (i < 1000000000000) {
  i++;
  // console.log(i);
  if (
    i % 20 === 0 &&
    i % 19 === 0 &&
    i % 18 === 0 &&
    i % 17 === 0 &&
    i % 16 == 0 &&
    i % 14 === 0 &&
    i % 13 === 0 &&
    i % 11 === 0
  ) {
    console.log(i);
    break;
  }
}
