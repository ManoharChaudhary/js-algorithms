class BubbleSort {
    sort(array) {
        let isSorted = false;
        let lastUnsorted = array.length - 1;  // iterate one less to avoid out of bound error.
        while(!isSorted) {
            isSorted = true;
             for (let index = 0; index < lastUnsorted; index++) {
                if(array[index] > array[index + 1]) {
                   this.swap(array, index , index + 1);  // swap element if greater than existing element
                   isSorted = false; // continue while till array sorted.
                }
            }
            lastUnsorted--; // minimize the sorting range upto unsorted element only.
        }
    }
    swap(array, toIndex, fromIndex) {
        [array[toIndex], array[fromIndex]] = [array[fromIndex], array[toIndex]];
    }
}

// 4,2,6,2,1
//     4,2,6,2,1
//     4,2,2,6,1
//     4,2,2,1,6
// 4,2,2,1 // 6 last so array iteration reduce by 1 index
//     2,4,2,1,6
//     2,2,4,1,6
//     2,2,1,4,6
// 2,2,1 // 4 is sorted to so iteration reduced by 1 index
//     2,1,2
// 2,1 // 2 is sorted
//     1,2
//so final output is 1,2,2,4,6
    

bubble = new BubbleSort();
a1 = [4,2,6,2,1];
// The algorithm first calls ToPrimitive coercion on both values, and 
// if the return result of either call is not a string, 
// then both values are coerced to number values using the ToNumber 
// operation rules, and compared numerically.

// For example:

// var a = [ 42 ];
// var b = [ "43" ];

// a < b;	// true
// b < a;	// false
// However, if both values are strings for the < comparison, simple 
// lexicographic (natural alphabetic) comparison on the characters is performed:

// var a = [ "42" ];
// var b = [ "043" ];

// a < b;	// false
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - 1; j++) {
//         if(array[j] > array[j + 1]) {
//             this.swap(array, j, j + 1 );
//         }
        
//     }
//  }

bubble.sort(a1)
console.log(a1);
// bubble.sort(a1);
// console.log(a1);




