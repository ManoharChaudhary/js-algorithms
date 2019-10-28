function someRecursive(arr, cb) {
    if (!arr.length) {
        return false;
    }
    if (cb(arr[0])) {
        return true;
    }
    return someRecursive(arr.slice(1), cb);
}
const isOdd = value => value % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
