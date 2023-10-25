// Find the smallest positive integer,
// x, such that
// 2x,
// 3x,
// 4x,
// 5x, and
// 6x, contain the same digits.

const arr1 = [];
const arr2 = [];

const checkPermuted = function (arg) {
  let argString = arg.toString();
  for (let i = 0; i < arg.length; i++) {
    arr1 = arr1.push(argString.slice(i, i + 1));
  }
  console.log(arr1);
};

checkPermuted(125874);
