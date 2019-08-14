// Given an array of integers, find the first missing positive
// integer in linear time and constant space. In other words,
// find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.
function findSmallestMissingInteger(arr) {
  arr.sort((a, b) => a - b); // n log n;
  missing = 1;
  max = arr[arr.length - 1];
  while (missing <= max) {  //n
    if (arr.indexOf(missing) === -1) {
      return missing;
    }
    missing++;
  }
  return missing;
}
console.log(findSmallestMissingInteger([1, 2, 0]));
//1,2,4,5
