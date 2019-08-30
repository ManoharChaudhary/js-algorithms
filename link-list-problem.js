const SinglelyLL = require("./singly-linked-list");
// using O(n2)
var singlyListIntersection = function(SLL1, SLL2) {
  let SLL1Current = SLL1.head;
  while (SLL1Current.next != null) {
    let SLL2Current = SLL2.head;
    while (SLL2Current.next != null) {
      if (SLL1Current.data == SLL2Current.data) {
        return SLL2Current.data;
      }
      SLL2Current = SLL2Current.next;
    }
    SLL1Current = SLL1Current.next;
  }
};
const SLL1 = new SinglelyLL();
const SLL2 = new SinglelyLL();
SLL1.append(3);
SLL1.append(7);
SLL1.append(8);
SLL1.append(10);

SLL2.append(99);
SLL2.append(1);
SLL2.append(8);
SLL2.append(10);
//console.log(singlyListIntersection(SLL1, SLL2));

// using o(m + n) // memory O(n)
var singlyListIntersection1 = function(SLL1, SLL2) {
  let map = new Map();
  let SLL1Current = SLL1.head;
  let index = 0;
  while (SLL1Current.next != null) {
    map.set(SLL1Current.data, index);
    SLL1Current = SLL1Current.next;
    index++;
  }
  let SLL2Current = SLL2.head;
  while (SLL2Current.next != null) {
    if (map.has(SLL2Current.data)) {
      return SLL2Current.data;
    }
    SLL2Current = SLL2Current.next;
    index++;
  }
};
console.log(singlyListIntersection1(SLL1, SLL2));

var singlyListIntersection2 = function(SLL1, SLL2) {
  
};
console.log(singlyListIntersection2(SLL1, SLL2));
//          p1
// A ={1,3,5,7,9,11} 
//       p2
// B = {2,4,9,11}
// 2



