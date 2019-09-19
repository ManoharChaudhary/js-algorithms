class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if(this.head == null) {
           this.head = newNode; 
        }else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            newNode.prev = current; 
            current.next = newNode;
        }
    }
    prepend(data) {
        const newNode = new Node(data);
        if(this.head == null) {
           this.head = newNode; 
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    remove(data) {
        if(this.head == null) {
            return;
        }
        if(this.head.data == data) {
           if(this.head.next != null) {
                let nextNode = this.head.next;
                nextNode.prev = null;
                this.head = nextNode;
           }else {
              this.head = null;  
           }
           return;
        }
        let current = this.head;
        while(current.data != data) {
          //  current = current.next;
        }
        console.log(this.head)
        if(current.data == data) {
             current.next.prev = current.prev;
        }else {
            return 'No data found';
        }
    }
}

var list = new DoublyLinkedList();
//list.prepend(1);
//list.prepend(5);
list.append(10); 
list.append(20);
list.remove(20);
// list.append(30);
// list.remove(20);
//list.prepend(40);
console.log(list);
//null 10 200 100 20 300 200 30 400
// 100        200         300  