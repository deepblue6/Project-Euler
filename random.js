// function removeNb(n) {
//   // n++;
//   // let possibleOptions = [];
//   // const sum = (n * (n - 1)) / 2;
//   // for (let i = 1; i <= n; i++) {
//   //   for (let j = 1; j <= n; j++) {
//   //     if (i * j === sum - i - j) {
//   //       possibleOptions.push([i, j]);
//   //     }
//   //   }
//   // }
//   // let k, p;
//   // for (k = 1, p = 1; k <= n, p <= n; k++, p++) {
//   //   if (k * p === sum - k - p) {
//   //     possibleOptions.push([k, p]);
//   //   }
//   // }
//   // for (
//   //   var i = 0, j = 0;
//   //   i < 10 && j < 10;
//   //   j++, i = j == 10 ? i + 1 : i, j = j == 10 ? (j = 0) : j
//   // ) {
//   //   if (i * j === sum - i - j) {
//   //     possibleOptions.push([i, j]);
//   //   }
//   //   return possibleOptions;
//   // }

//   let a = Math.floor(n / 2) + 1;
//   let result = [];
//   for (let b = n; b > a; a++) result.push([a, b], [b, a]);
//   return result.sort((a, b) => a[0] - b[0]);
// }

// console.log(removeNb(26));

// snail = function (array) {
//   let newArr = [...array];
//   let output = [];

//   console.log(done);
//   // const output = array.reduce((acc, val) => {

//   //   acc.push(val);

//   //   return acc;
//   // }, []);
//   // console.log(output);
// };

// snail([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// const lastDigit = function (str1, str2) {
//   let big = BigInt(Number(str1) ** Number(str2));
//   big = big.toString();
//   console.log(big);
//   console.log(big.slice(-1));
// };
// lastDigit(
//   "3715290469715693021198967285016729344580685479654510946723",
//   "68819615221552997273737174557165657483427362207517952651"
// );

// function incrementString(strng) {
//   // function hasNumber(myString) {
//   //   return /\d/.test(myString);
//   // }
//   // if (hasNumber === false) {
//   //   return strng + "1";
//   // } else {
//   let slicedNum;
//   let regExp = /[a-zA-Z]/g;

//   // if(regExp.test(testString)){
//   strng = strng.split(" ");
//   console.log(typeof strng);
//   console.log(strng.findLastIndex(strng));

//   // }
//   // (strng.slice(-1).match(`^[0-9]$`)) ? strng.slice(-1)++ : strng+='1';
// }

// incrementString("foobar001");

function josephus(items, k) {
  let output = [];
  let end;
  if (items.length === 0) return output;
  while (output.length !== 0) {
    end = items.reduce((acc, val) => {
      return acc.push(val);
    }, []);
  }
  console.log(end);
}

josephus([1, 2, 3, 4, 5, 6, 7], 3);
