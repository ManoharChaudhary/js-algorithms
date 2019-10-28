function capitalizeFirst(strArr, length = 0) {
    if (length  == strArr.length) {
        return;
    }
    strArr[length] = strArr[length][0].toUpperCase() + strArr[length].slice(1);
    capitalizeFirst(strArr, ++length)
    return strArr;
}

console.log(capitalizeFirst(['awesome', 'my', 'hello'])); // emosewa
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']