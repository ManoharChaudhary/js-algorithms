/* #Module Design Pattern
JavaScript modules are the most frequently used design patterns
for keeping particular pieces of code independent of other components.
This provides loose coupling to support well-structured code. */

var HTMLChanger = (function() {
  var contents = "cotents";
  var changeHTML = function() {
    // uncomment following when you run code on browser
    // var element = document.getElementById('id-tobe-change');
    // element.innerHTML = contents;
  };

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };
})();
HTMLChanger.callChangeHTML(); // cotents
console.log(HTMLChanger.contents); // undefined

// Revealing Module Pattern
// A variation of the module pattern is called the Revealing Module Pattern.
// The purpose is to maintain encapsulation and reveal certain variables
// and methods returned in an object literal.

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log("Inside privat method!");
    privateVariable++;
  };

  var methodToExpose = function() {
    console.log("This method I wanted to expose!");
  };
  var otherMethodToExpose = function() {
    privateMethod();
  };
  return {
    first: methodToExpose,
    second: otherMethodToExpose
  };
})();
Exposer.first(); //'This method I wanted to expose!'
Exposer.second(); // 'Inside privat method!'
Exposer.methodToExpose(); // Exposer.methodToExpose is not a function
