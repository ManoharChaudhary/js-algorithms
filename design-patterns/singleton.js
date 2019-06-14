/* A Singleton only allows for a single instantiation,
but many instances of the same object.
The Singleton restricts clients from creating multiple objects, 
after the first object created, it will return instances of itself. */
var printer = (function() {
  var printerIntance;
  var create = function() {
    function print(paper) {
      // underlying printer mechanics
      console.log("Print me " + paper);
    }
    function turnOn() {
      // underlying printer mechanics
      console.log("Warm up & check papers");
    }
    return {
      print: print,
      turnOn: turnOn
    };
  };
  return {
    getIntance: function() {
      if (!printerIntance) {
        printerIntance = create();
      }
      return printerIntance;
    }
  };
})();
var p1 = printer.getIntance();
p1.turnOn();
p1.print("paper1");
p1.print("paper2");
