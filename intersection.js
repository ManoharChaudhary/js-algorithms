string = "12345678"
var arr1= [1,2,3,4,5,6];
var arr2 = [1,7,8,5];
var map = new Map();
console.log(new Set([...arr1, ...arr2]))
for(let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], i);
}
console.log(map);
var inter = [];
for(let i= 0; i < arr2.length; i++) {
    if(map.has(arr2[i])) {
        inter.push(arr2[i]);
    }
}
console.log(inter)

// space and time complexity  is n