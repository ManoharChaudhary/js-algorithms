class MergeSort {
  sort(array = [], left = 0, right = array.length - 1) {
    if (left < right) { // start left less than right
      let middle = Math.floor((left + right) / 2); // find middle to divide array
      this.sort(array, left, middle); // sort left half of array
      this.sort(array, middle + 1, right); // sort right half of array
      this.merge(array, left, middle, right); // merge left and right array
    }
  }
  merge(array, start, mid, end) {
    let temp = [];  // tempory array to hold sorted elements
    let i = start,  // start index of left array
      j = mid + 1,  // start index of right array
      k = 0;  // index of temporary array
    while (i <= mid && j <= end) { // check if start not exceeded there end index
      if (array[i] < array[j]) {
        temp[k] = array[i];
        i++;
      } else {
        temp[k] = array[j];
        j++;
      }
      k++;
    }
    while (i <= mid) { // is there any leftover in left array? if add those in temp array
      temp[k] = array[i];
      i++;
      k++;
    }
    while (j <= end) { // is there any leftover in right array? if add those in temp array
      temp[k] = array[j];
      j++;
      k++;
    }
    // replace temporary array element into actual array
      array.splice(start, end + 1, ...temp);
    }
}

const mergeSort = new MergeSort();
const a1 = ['A', 'C', 'E', 'B'];
mergeSort.sort(a1);
console.log(a1);
