
function fibonacciNumber(n) {
    var a = 1,
    b = 1,c,
    fibSequence = [];
    fibSequence.push(a, b);
    for(let i= 2; i< n; i++) {
        c = a + b;
        fibSequence.push(c);
        a = b; 
        b = c;
    }
    return fibSequence;
}
console.log(fibonacciNumber(8));

// using recursive call

function fibonacciRecursive(n, a = 1, b = 1, fibSequence = []) {
    if(b == 1) {
        fibSequence.push(a, b);
    }
    if(n == 2) {
        return fibSequence;
    }
    var c = a + b;
    fibSequence.push(c);
    return fibonacciRecursive(n-1, b, c,fibSequence);
}
console.log(fibonacciRecursive(8));
