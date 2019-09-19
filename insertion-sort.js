class InsertionSort {
  sort(array = []) {
    for (let index = 1; index < array.length; index++) {
      let value = array[index];
      let hole = index;
      while (hole > 0 && array[hole - 1] > value) {
        array[hole] = array[hole - 1];
        hole--;
      }
      array[hole] = value;
    }
  }
}
insertion = new InsertionSort();
a1 = [4, 2, 6, 2, 1];
insertion.sort(a1);
console.log(a1);

//
// 4,2,7,44,4,1
//     2,4,7,44,4,1
//         hole 4 and value = 4
//     2,4,7,44,44, 1
//         hole 3 and value 4
//     2,4,7,7,44,1
//         hol2 value 4
//     2,4,4,7,44,1
//         hole 5 and value 1
//     2,4,4,7,44,44
//        hole 4 and value 1
//     2,4,4,7,7,44
//         hole 3 and value 1
//     2,4,4,4,7,44
//         hole 2 and value 1
//     2,4,4,4,7,44
//         hole 1 and value 1
//     2,2,4,4,7,44
//        hole 0 and value 1
//     1,2,4,4,7,44
