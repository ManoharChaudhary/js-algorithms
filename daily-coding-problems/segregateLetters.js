
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
var segregateLetters = arr => {
    let low = mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        switch (arr[mid]) {
            case 0:
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                mid++; low++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
                break;
            default:
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                mid++; low++;
                break;
        }
    }
}
arr = [0, 2, 0, 2, 1, 1, 0]
segregateLetters(arr);
console.log(arr);