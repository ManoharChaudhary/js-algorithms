function isBalanced(inputString){
    function  isOpenTerm(openTerm) {
        for(let terms of token) {
            if(terms[0] == openTerm) {
                return true;
            }
        }
        return false;
    }
    function isTermMatch(openTerm, closeTerm) {
        for(let terms of token) {
            if(terms[0] == openTerm) {
                if(terms[1] == closeTerm) {
                    return true;
                }
            }
        }
        return false;
    }
    const token = [['{','}'],['[',']'],['(',')']];
    let stack = [];
    for(let char of inputString) {
        if(isOpenTerm(char)) {
            stack.push(char);
        }else {
            if(isTermMatch(stack[stack.length - 1], char)){
                stack.pop();    
            }else{
                return false;
            }
        }
       
    }
    return stack.length == 0;
   
}
console.log(isBalanced('{{{[(}}}'))