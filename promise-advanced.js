//https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
function doSomething() {
  return Promise.resolve(10);
}
function doSomethingElse() {
  return Promise.resolve(20);
}

//1
doSomething()
  .then(function() {
    return doSomethingElse();
  })
  .then(function(result) {
    console.log(result); // will return 20
  });
//2
doSomething()
  .then(function() {
    doSomethingElse();
  })
  .then(function(result) {
    console.log(result); // will return undefined
  });
// 3
doSomething()
  .then(doSomethingElse())
  .then(function(result) {
    console.log(result); // will return 10
  });
//4.
doSomething()
  .then(doSomethingElse)
  .then(function(result) {
    console.log(result); //will return 20
  });
/* ----------- new Challenge -------------- */
var promise1 = new Promise((resolve, reject) => {
  resolve("Hi");
  resolve("Hello");
});
console.log(promise1.then(console.log));
