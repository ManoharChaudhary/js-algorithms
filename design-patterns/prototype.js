/* 
Prototype Design Pattern
Any JavaScript developer has either seen the keyword prototype, 
confused by the prototypical inheritance, or implemented prototypes in their code. 
The Prototype design pattern relies on the JavaScript prototypical inheritance.
The prototype model is used mainly for creating objects in performance-intensive situations. */

var TeslaModel1S = function() {
    this.numberOfWheels = 4,
    this.manufacturer = "Tesla",
    this.make = "model S"
};
TeslaModel1S.prototype.go = function() {
  //Rotation wheels
};
TeslaModel1S.prototype.stop = function() {
  //Apply brake pads
};
//Revealing Prototype Pattern
var TeslaModel1S = function() {
  (this.numberOfWheels = 4),
    (this.manufacturer = "Tesla"),
    (this.make = "model S");
};
TeslaModel1S.prototype = function() {
  var go = function() {
    //Rotation wheels
  };
  var stop = function() {
    //Apply brake pads
  };
  return {
    pressGasPadal: go,
    pressBrakePadal: stop
  };
};
