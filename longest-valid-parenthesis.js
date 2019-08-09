// find the length of longest valid string:
string1 = "(()";
string2 = "((())())";
let stack = [];
let count = 0;
for(let i = 0; i< string2.length; i++) {
    //console.log(i, )
    if(string2[i] === "(") {
        stack.push(string2[i]);
    }else {
        if(string2[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
            count +=2;
        }
    }
}
console.log(count)

