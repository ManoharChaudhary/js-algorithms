// LinkedList 

class Node {
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
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    var current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }
  prepend(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  remove(data) {
    if (this.head == null) {
      return;
    }
    if (this.head.data == data) {
      this.head = this.head.next;
    }
    var current = this.head;
    while (current.next.data != data) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}
var list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(100);
//list.remove(10);
console.log(list);
