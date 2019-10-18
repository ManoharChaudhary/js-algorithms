// MultiPointer - isSubsequence
// write the function which will check wheather the charcter in firstString 
// appear somewhere is secondString without there order changing.

function isSubsequence(str1, str2) {
    let i = 0;
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abrcbbad')) // true
console.log(isSubsequence('abc', 'acb')) // false  