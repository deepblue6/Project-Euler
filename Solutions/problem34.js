let factorialEqual = [];
let f = 0;

const destructure = function (num) {
  let numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    f += factorialChecker(numString[i]);
  }
  console.log(f);
  if (f === num) {
    factorialEqual.push(Number(numString));
  }
};

const factorialChecker = function (num) {
  let counter = 1;
  for (let i = 1; i <= num; i++) {
    counter = counter * i;
  }
  return counter;
};
let i = 2;
while (i < 100) {
  i++;
  destructure(i);
}
console.log(factorialEqual);
