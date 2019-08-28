// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers
//is 9009 = 91 × 99.
// 9 9
// 8 9 // 88
// 7 9 // 77
// 6 9 // 66
// 5 9 // 55
// 4 9 // 44
// 3 9 // 33
// 2 9 // 22
// 1 9 // 11
function largestPalindromeOf3digit() {
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (isPalindrome(i * j)) {
        return i * j;
      }
    }
  }
}
//906609
//698896
//913*993
// Find the largest palindrome made from the product of two 3-digit numbers.
function isPalindrome(num) {
  let reverse = 0;
  let temp = num;
  while (num > 0) {
    let reminder = num % 10;
    reverse = reverse * 10 + reminder;
    num = Math.floor(num / 10);
  }
  if (reverse === temp) {
    return true;
  } else {
    return false;
  }
}
console.log(largestPalindromeOf3digit());
