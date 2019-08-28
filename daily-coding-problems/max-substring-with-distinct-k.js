//This problem was asked by Amazon.

//Given an integer k and a string s,
//find the length of the longest substring
//that contains at most k distinct characters.

//For example, given s = "abcba" and k = 2,
//the longest substring with k distinct characters is "bcb".
// abcba
//   s
//     e
// str : a, ab, bcb,cba
// dic
// c: 1
// a: 1
function logestSubstring(s, k) {
  let start = (end = 0);
  let dic = new Map();
  let substr = [];
  while (end < s.length) {
    let char = s[end];
    if (dic.has(char)) {
      dic.set(char, dic.get(char) + 1);
    } else {
      dic.set(char, 1);
    }
    while (dic.size > k) {
      let char = s[start];
      dic.set(char, dic.get(char) - 1);
      if (dic.get(char) == 0) {
        dic.delete(char);
      }
      start++;
    }
    substr.push(s.slice(start, end + 1));
    end++;
  }
  console.log(substr);
  return substr.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      return cur;
    } else {
      return acc;
    }
  });
}
console.log(logestSubstring("abcba", 2));

