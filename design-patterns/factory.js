/* The Factory pattern is another creational pattern concerned with the notion of creating 
objects. Where it differs from the other patterns in its category is that it doesn't 
explicitly require us to use a constructor. Instead, a Factory can provide a generic interface 
for creating objects, where we can specify the type of factory object we wish to be created.

Imagine that we have a UI factory where we are asked to create a type of UI component.
 Rather than creating this component directly using the new operator or via another 
 creational constructor, we ask a Factory object for a new component instead.
  We inform the Factory what type of object is required (e.g "Button", "Panel") 
  and it instantiates this, returning it to us for use. */


var Car = function(options) {
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
};
var Truck = function(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
};

var VehicleFactory = function() {};
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
  switch (options.vehicleType) {
    case "Car":
      this.vehicleClass = Car;
      break;
    case "Truck":
      this.vehicleClass = Truck;
      break;
  }

  return new this.vehicleClass(options);
};
var vf = new VehicleFactory();
var car1 = vf.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

var truck1 = vf.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small"
});

console.log(car1);
console.log(truck1);

/* The Factory pattern can be especially useful when applied to the following situations:

1. When our object or component setup involves a high level of complexity
2. When we need to easily generate different instances of objects depending on the environment
 we are in
3. When we're working with many small objects or components that share the same properties
4. When composing objects with instances of other objects that need only satisfy an API contract 
(aka, duck typing) to work. This is useful for decoupling. */
