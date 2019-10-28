function flatten(arr, result = []) {
    if(!arr.length) {
        return result;
    }
    if(typeof arr[0] !== 'object') {
        result.push(arr[0]);
    }else {
       flatten(arr[0], result); 
    }    
    return flatten(arr.slice(1), result);
}
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   } 
//   return newArr;
// }