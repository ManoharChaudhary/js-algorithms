var a1 = [10,32,12,3,1,3,44,2,4,12];
var stack = [];
for(let i = 0; i< a1.length; i++) {
    if(a1[i] % 2 == 0) {
        stack.push(i);
    }
}
while(stack.length> 1) {
  let firstEven = stack.shift();
  let LastEven = stack.pop();
  [a1[firstEven], a1[LastEven]]  = [a1[LastEven], a1[firstEven]];   
}
// time complexity O(n)
// space complexity O(n)
