/* Find a peak element
 Given an array of integers. Find a peak element in it. An array element is
 peak if it is NOT smaller than its neighbors. For corner elements, 
 we need to consider only one neighbor. For example, for input 
 array {5, 10, 20, 15}, 20 is the only peak element */
 function peakRecursive(array = [], low = 0, high = array.length - 1, n = array.length) {
    let mid = Math.floor(low + (high - low) / 2);
    if ((mid == 0 || array[mid - 1] <= array[mid]) 
    && (mid == n-1 || array[mid] >= array[mid + 1])) {
      return array[mid];
    } else if (array[mid - 1] > array[mid]) {
      return peakRecursive(array, low, (mid-1));
    } else {
      return peakRecursive(array, mid + 1, high);
    }
  }
  console.log(peakRecursive([-2,3]));


