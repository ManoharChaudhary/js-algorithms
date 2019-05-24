// Given an integer N and a lowercase string. The string is repeated infinitely.
// The task is to find the No. of occurrences of a given character x in first N letters.

// Examples:

// Input : N = 10 str = "abcac"
// Output : 4
// Explanation: "abcacabcac" is the substring from the infinitely repeated string.
//  In first 10 letters 'a' occurs 4  times.
          
// Input: N = 10, str = "aba"
// Output : 7
function repeatString(s, n) {
  let count = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] == "a") {
      count++;
    }
  }
  const repitation = Math.floor(n / s.length);
  count = count * repitation;
  for (let index = 0; index < n % s.length; index++) {
    if (s[index] == "a") {
      count++;
    }
  }
  return count;
}
console.log(repeatString("ss", 10));
