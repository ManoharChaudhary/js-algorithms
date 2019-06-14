var Subject = function() {
    var observers = [];
    return {
      subscribleObserver: function(observer) {
        observers.push(observer);
      },
      unsubscribleObserver: function(observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
          observers.splice(index, 1);
        }
      },
      notifyObserver: function(observer) {
        var index = observers.indexOf(observer);
        if (index > -1) {
          observers[index].notify(index + 1); // +1 to avoid index start from zero
        }
      },
      notifyAllObservers: function() {
        for (let i = 0; i < observers.length; i++) {
          observers[i].notify(i + 1); // +1 to avoid index start from zero
        }
      }
    };
  };
  
  var Observer = function() {
    return {
      notify: function(index) {
        console.log("Observer " + index + " is notified!");
      }
    };
  };
  var subject = new Subject();
  
  var observer1 = new Observer();
  var observer2 = new Observer();
  var observer3 = new Observer();
  var observer4 = new Observer();
  
  subject.subscribleObserver(observer1);
  subject.subscribleObserver(observer2);
  subject.subscribleObserver(observer3);
  subject.subscribleObserver(observer4);
  subject.notifyAllObservers();
  subject.unsubscribleObserver(observer1);
  // subject.notifyObserver(observer3);
  