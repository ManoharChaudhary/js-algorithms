// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function findNumbers(arr, k) {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = k - arr[i];
    if (m.has(complement)) {
      return [complement, arr[i]];
    } else {
      m.set(arr[i]);
    }
  }
  return null;
}
console.log(findNumbers([10, 11, 3, 7], 1));
