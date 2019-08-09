class Node {
    constructor(data, prev = null) {
        this.data = data;
        this.prev = prev;
    }
}
class Queue {
    constructor(){
        this.head = null; // remove from head
    }
    // add into queue 
    add(data) {
        let newNode = new Node(data)
        if(this.head == null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.prev != null) {
            current = current.prev;
        }
        current.prev = newNode;
    }
    // peak get peak value of queue 
    peek() {
       if(this.head != null) {
           return this.head.data;
       }else {
           return null;
       } 
    }
    // check is empty queue 
    isEmpty() {
        return this.head == null;
    }
    // remove value from queue 
    remove() {
        if(this.head == null) {
            return null;
        }
       const removedData = this.head.data; 
       this.head = this.head.prev;
       return removedData;
        
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.add(10);
queue.add(20);
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.peek());
console.log(queue.remove());
console.log(queue)

// {10 prev: { 20: prev: null}}
