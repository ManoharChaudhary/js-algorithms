function maximumSubArray(arr) {
  if (arr.length <= 0) {
    return;
  }
  let currentMax = arr[0];
  let globalMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}
console.log(maximumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
 