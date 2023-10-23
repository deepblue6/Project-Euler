// Find the largest palindrome made from the product of two 3-digit numbers.

let largestPalindrome = 0;
for (let d = 99; d < 1000; d++) {
  for (let m = 99; m < 1000; m++) {
    largestPalindrome =
      d * m === Number((d * m).toString().split("").reverse().join("")) &&
      d * m > largestPalindrome
        ? (largestPalindrome = d * m)
        : (largestPalindrome = largestPalindrome);
  }
}
console.log(largestPalindrome);
