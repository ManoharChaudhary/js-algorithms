function fib(num) {
    if (num == 0 || num == 1) {
        return  num;
    }
    return fib(num - 1) + fib(num - 2); 
}

// 1, 1, 2, 3
//2 + 1
    


            
console.log(fib(3)); 
console.log(fib(10)); // 21
console.log(fib(28)); // 55