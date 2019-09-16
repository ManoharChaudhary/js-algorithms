// This problem was asked by Google.

// Given an array of strictly the characters
// 'R', 'G', and 'B', segregate the values of
// the array so that all the Rs come first,
// the Gs come second, and the Bs come last.
// You can only swap elements of the array.

// Do this in linear time and in-place.

//For example, given the array
// ['G', 'B', 'R', 'R', 'B', 'R', 'G'],
//it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

const sortChars = arr => {
  for(let char =0; char < arr.length -1; char++) {
      console.log(arr[char].charCodeAt(), arr[char + 1].charCodeAt())
      if(arr[char].charCodeAt() < arr[char + 1].charCodeAt()) {
          [arr[char] ,arr[char + 1]] = [arr[char + 1], arr[char]]
          console.log(arr[char] ,arr[char + 1])
      }
  }
  //arr.sort((a,b) => b.localeCompare(a));
  //  console.log(arr);
};
arr = ["G", "B", "R", "R", "B", "R", "G"];
//arr = ['a','d','b','c'];
sortChars(arr);
console.log(arr);
