function isPrime(num) {
    if(num ==1) {
        return false;
    }
    for(var i = 2; i <= num; i++) {
        if(num % i == 0) {
            return false;
        }
   } 
   return (i == num);

}

console.log(isPrime(1));
