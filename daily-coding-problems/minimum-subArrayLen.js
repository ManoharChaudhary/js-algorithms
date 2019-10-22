
// Sliding Window = Minimum SubArrayLen

// function should return minimun length of a contiguous subarray of which the sum is 
// greater than or equal to integer passed to the function If there is'nt one return 0 instead.

function minSubArrayLen(arr, target) {
    let length = Infinity;
    let i = 0;
    let j = 0;
    let temp = 0;
    while (j < arr.length) {
        if ((temp + arr[j]) < target) {
            temp += arr[j];
            j++;
        } else {
            length = Math.min((j + 1 - i), length);
            temp -= arr[i];
            i++;
        }
    }
    return length === Infinity ? 0 : length;
}
// i = 0
// j = 0
// length = 0
// sum = 0
// target = 7
//                            ij
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
