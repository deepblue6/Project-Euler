let i = 1;
let biggestChain = 0;
let length = 0;
let array = [];
while (i <= 10) {
  collatz(i);
  i++;
}

function collatz(num) {
  array.push(num);
  if (num === 1) {
    if (length > biggestChain) {
      biggestChain = length;
    }
    array = [];
    return;
  }

  if (num % 2 === 0) {
    console.log(length);
    length++;
    collatz(num / 2);
  }
  if (num % 3 === 0) {
    length++;
    collatz(3 * num + 1);
  }
}
console.log(biggestChain);
