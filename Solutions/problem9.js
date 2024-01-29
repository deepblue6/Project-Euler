const pythagorean = function () {
  for (let i = 1; i < 1000; i++) {
    for (let j = i + 1; j < 1000; j++) {
      let k = 1000 - i - j;
      if (Math.sqrt(i ** 2 + j ** 2) === k) return i * j * k;
    }
  }
  return null;
};
console.log(pythagorean());
