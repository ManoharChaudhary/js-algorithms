
// write arveragePair function which will accept sort integer array
// and target avg value. check if array has pair which sum equal to 
// target avg value
function averagePair(array, target) {
    // return false if array length less than 1
    if (!array.length) {
        return false;
    }
    let i = 0;
    let j = array.length - 1;
    while(i < j) {
       let avg = (array[i] + array[j]) / 2;
       if (avg === target) {
            return true;
        } else if (avg > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false

// (function(x) {
// let  a =10;
//let a = 20;
//console.log(a)
// })(1)

// domain1         authServer          domain2 
// request---
//                 authServer
//                 setcoookies
//                 //3 mints  
// //token                
//                                     -----request
//                 authServer
//                 checkCookies            // token
//                 if exist then
//                 create new token
//                 without getting user/pass             
        




