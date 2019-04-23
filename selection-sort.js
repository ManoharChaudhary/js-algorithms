class SelectionSort {
  sort(array = []) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex != i) {
         this.swap(array, i, minIndex);
      }
    }
  }
  swap(array, toIndex, fromIndex) {
    [array[toIndex], array[fromIndex]] = [array[fromIndex], array[toIndex]];
  }
}

selection = new SelectionSort();
a1 = [4, 2, 6, 2, 1];
// iterate 
// 4,2,6,2,1
     //min 4
//after first iteration
// 1,2,6,2,4
// now input is 2,6,2,4
// 2,6,2,4
   // min 3
// 2,6,4
  // min 4
       



console.log(a1);
selection.sort(a1);
console.log(a1);
