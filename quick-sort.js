class QuickSort {
  sort(array, start = 0, end = array.length - 1) {
    if (start <= end) {
      let pIndex = this.partion(array, start, end);
      this.sort(array, start, pIndex - 1);
      this.sort(array, pIndex + 1, end);
    }
  }
  partion(array, start, end) {
    let pIndex = start;
    let pivot = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] <= pivot) {
        this.swap(array, i, pIndex);
        pIndex++;
      }
    }
    this.swap(array, pIndex, end);
    return pIndex;
  }
  swap(array, toIndex, fromIndex) {
    [array[toIndex], array[fromIndex]] = [array[fromIndex], array[toIndex]];
  }
}

const quick = new QuickSort();
a1 = [34, 4, 21, 2, 1];
quick.sort(a1);
console.log(a1);
// [1, 4, 21, 2, 34];