// LinkedList 

class Node {
  next;
  data;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    if(this.head == null) {
      this.head = new Node(data);
      return; 
    }
    var current = this.head;
    while(current.next != null) {
      current = current.next;
    }
    current = new Node(data);
  }
}

var list = new LinkedList();
list.append(10);
list.append(20);
console.log(list);