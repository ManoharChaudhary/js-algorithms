// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
function repeatString(s, n) {
  const orignalLength = s.length;
  let finalString = '';
  if (orignalLength < 1) {
    return 0;
  } else if (orignalLength > n) {
    finalString = s.slice(0, n + 1);
  } else if (orignalLength < n) {
    let start = 0;
    while (finalString.length < n) {
      if (start === orignalLength - 1) {
        start = 0;
      }
      if (s.length * finalString.length < n) {
        finalString += s;
      } else {
        finalString += s[start];
        start++;
      }
    }
  } else {
    finalString = s;
  }
  return finalString.split("").reduce((a, c) => {
    if (c === "a") {
      return a + 1;
    } else {
      return a;
    }
  }, 0);
}
console.log(repeatString("sssssassssa", 10));

// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
// function repeatString(s, n) {
//     let count = 0;
//     for (let index = 0; index < s.length; index++) {
//       if (s[index] == "a") {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(repeatString('ss', 10));
  
  