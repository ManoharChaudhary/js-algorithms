// implement the function the called, arethereDuplicates which the variable number
// of arguments that check wheather are any duplicates in arguments
function areThereDuplicates(...arr) {
    arr.sort();
    let i = 0;
   for (let j = 1; j < arr.length; j++) {   
    if (arr[i] !== arr[j]) {
            i++;
        } else {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true