/* Given an array A of strings made only from lowercase letters,
return a list of all characters that show up in all strings
within the list (including duplicates).  For example,
if a character occurs 3 times in all strings but not 4 times,
you need to include that character three times in 
the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"] */

var findCommonChars = strArr => {
  let unique = [];
  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if ((strArr[i + 1].indexOf(strArr[i][j]) != -1) && i == 1) {
        //console.log(strArr[i], i);
        unique.push(strArr[i][j]);
      } else if (unique.indexOf(strArr[i][j]) != -1) {
        // console.log(strArr[i][j]);
        unique.splice(unique.indexOf(strArr[i][j]), 1);
      }
    }
    // console.log(unique);
  }
  return unique;
};

console.log(findCommonChars(["bella", "label", "roller"]));
