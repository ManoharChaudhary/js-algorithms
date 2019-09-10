/* The edit distance between two strings refers 
to the minimum number of character insertions,
deletions, and substitutions required to change
one string to the other. For example, the edit 
distance between “kitten” and “sitting” is 
three: substitute the “k” for “s”,
substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them. */

var findDistance = (str1, str2) => {
  let count = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i] && i < str2.length) {
      count++;
    }
  }
  while (i < str2.length) {
    count++;
    i++;
  }
  return count;
};
console.log(findDistance("kitten", "sit"));
