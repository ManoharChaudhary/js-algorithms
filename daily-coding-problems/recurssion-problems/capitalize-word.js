function capitalizeWords(arr, result = []) {
    if (!arr.length) {
        return result;
    }
    result = result.concat(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1), result);
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']