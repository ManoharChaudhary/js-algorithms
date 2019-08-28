// for Promise all
var p1 = Promise.resolve(5);
var p2 = Promise.resolve('string');
var p3 = Promise.reject(new Error('data error')).catch( err => 6);

// for Promise race
var p4 = Promise.reject(new Error('race error')).catch(err => err);
var p5 = Promise.resolve('p5 resolved');
var p6 = Promise.reject(new Error('data error')).catch( err => 6);

Promise.all([p1, p2, p3]).then(data => {
    console.log("all");
    console.log(data)
}).catch(err => {
    console.log(err);
})
Promise.race([p4, p5, p6]).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
})