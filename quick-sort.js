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
      for(let i = start; i < end; i++) {
            if(array[i] <= pivot) {
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
a1 = [34,4,21,2,1];
quick.sort(a1);
console.log(a1);


[34,4,21,2,1] //I pIndex pivot end 
              // 4  0      1     4
// swap a[pIndex] = a[end]
[1,4,21,2,34] 

([], 0, -1) // left handside invalid
([4,21,2,34] , 1, 4)
[4,21,2,34] // I pIndex pivot end 
               2  2      34    4


               obj = {
                   0: 'ab',
                   2: 'cb',
                   __proto__ : {
                       3: 'dd',
                       33: undefined,
                       44: 'dd',
                       __proto__: {
                           55: 'mm',
                           66: 'zz'
                       }
                   }
               } 
               obj.sort(function(a,b){
                   return a-b
               })
               
               
               [2,21,3,32,43].sort();
               [2,3,21,32,43]
               // 10 // quicksort // variation
               // 10 insertion
