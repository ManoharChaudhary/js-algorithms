function productOfArray(arr) {
    if (!arr.length) {
        return null;
    }
    return arr[0] * (productOfArray(arr.slice(1)) ? productOfArray(arr.slice(1)) : 1);
}

console.log(productOfArray([])); 
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 10