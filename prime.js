function isPrime(num) {
   for(let i = 2; i < num - 1; i++) {
        if(num % i == 0) {
            return false;
        } else {
            return true;
        }
   } 

}

console.log(isPrime(7));