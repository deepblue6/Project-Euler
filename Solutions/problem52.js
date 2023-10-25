// Find the smallest positive integer,
// x, such that
// 2x,
// 3x,
// 4x,
// 5x, and
// 6x, contain the same digits.

let arr1 = [];
let arr2 = [];

const checkPermuted = function (arg) {
  // let argString = arg.toString();
  if (Number(arg * 2).toString().length === arg.toString().length) {
    console.log(arg);
    return true;
  }

  for (let i = 0; i <= 6; i++) {
    arr1.push(arg * i);
  }
  if (arr1 === arg) {
    // return console.log("TRUE");
  }
  return false;
};

let i = 8;
while (i < 1000) {
  i++;
  if (checkPermuted(i)) {
    console.log(i);
    break;
  }
}
// console.log(arr1);
