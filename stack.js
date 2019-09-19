class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor(){
        this.top = null;
    }
    // push into stack 
    push(data) {
        let newNode = new Node(data)
        if(this.top == null) {
            this.top = newNode;
            return;
        }
        let current = this.top;
        newNode.next = current;
        this.top = newNode;
     }
    // read top node form stack
    peek() {
       if(this.top != null) {
           return this.top.data;
       }else {
           return null;
       } 
    }
    // check is empty stack 
    isEmpty() {
        return this.top == null;
    }
    // remove value from stack 
    pop() {
        if(this.top == null) {
            return null;
        }
       const removedData = this.top.data; 
       this.top = this.top.next;
       return removedData;
        
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack)

// {10 next: { 20: next: null}}
