class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data, current = this.root) {
    const newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let key = data <= current.data ? "left" : "right";
    if (!current[key]) {
      current[key] = newNode;
    } else {
      this.insert(data, current[key]);
    }
  }
  delete(data, current = this.root) {
    if (current === null) {
      return current;
    }
    if (data < current.data) {
      current.left = this.delete(data, current.left);
    } else if (data > current.data) {
      current.right = this.delete(data, current.right);
    } else {
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        const MIN = this.findMin(current.right);
        current.data = MIN;
        current.right = this.delete(MIN, current.right);
      }
    }
    return current;
  }
  search(data, current = this.root) {
    if (current === null) {
      return false;
    } else if (current.data === data) {
      return true;
    }
    let key = data <= current.data ? "left" : "right";
    if (!current[key]) {
      return false;
    } else {
      return this.search(data, current[key]);
    }
  }
  findMin(current = this.root) {
    if (this.root == null) {
      return -1;
    }
    if (current.left == null) {
      return current.data;
    }
    return this.findMin(current.left);
  }
  findMax(current = this.root) {
    if (this.root == null) {
      return -1;
    }
    if (current.right == null) {
      return current.data;
    }
    return this.findMax(current.right);
  }
  findHeight(current = this.root) {
    if (current == null) {
      return -1;
    }
    return (
      Math.max(this.findHeight(current.left), this.findHeight(current.right)) +
      1
    );
  }
  levelOrderTraversal() {
    if (this.root == null) {
      return;
    }
    let Queue = []; // using array for queue behaviour
    Queue.push(this.root);
    console.log("Data in Level Order Traversal:");
    while (Queue.length > 0) {
      const current = Queue.shift(); // remove from front
      console.log(current.data);
      if (current.left !== null) {
        Queue.push(current.left);
      }
      if (current.right !== null) {
        Queue.push(current.right);
      }
    }
  }
  // DLR
  preOrderTraversal(current = this.root) {
    if (current === null) {
      return;
    }
    console.log(current.data);
    this.preOrderTraversal(current.left);
    this.preOrderTraversal(current.right);
  }
  //LDR
  inOrderTraversal(current = this.root) {
    if (current === null) {
      return;
    }
    this.inOrderTraversal(current.left);
    console.log(current.data);
    this.inOrderTraversal(current.right);
  }
  postOrderTraversal(current = this.root) {
    if (current === null) {
      return;
    }
    this.postOrderTraversal(current.left);
    this.postOrderTraversal(current.right);
    console.log(current.data);
  }
  // MIN & MAX will be -Infinify & Infinify for numbers.
  isBinarySearchTree(current = this.root, MIN = "A", MAX = "Z") {
    if (current == null) {
      return true;
    }
    if (
      current.data >= MIN &&
      current.data < MAX &&
      this.isBinarySearchTree(current.left, MIN, current.data) &&
      this.isBinarySearchTree(current.right, current.data, MAX)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //       F
  //   D      J
  // B   E   G   K
  // A    C        I
  //       H

  // PREORDER (DLR): //F,D,B,A,C,E,J,G,I,H,K
  // INORDER (LDR):  //A,B,C,D,E,F,G,H,I,J,K
  // POSTORDER(LRD): //A,C,B,E,D,H,I,G,K,J,F
}
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(35);
bst.insert(17);
bst.insert(18);
bst.insert(19);
bst.insert(31);
bst.insert(44);
//console.log(bst.inOrderTraversal())
console.log(bst.delete(20));
//console.log(bst.inOrderTraversal());
//console.log(bst.root)

// bst.insert("F");
// bst.insert("D");
// bst.insert("J");
// bst.insert("B");
// bst.insert("E");
// bst.insert("G");
// bst.insert("K");
// bst.insert("A");
// bst.insert("C");
// bst.insert("I");
// bst.insert("H");
//bst.preOrderTraversal();
//bst.postOrderTraversal();
//console.log(bst.isBinarySearchTree());

// console.log(bst.search(10));
// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.findHeight());
//bst.levelOrderTraversal();

//   following preOrderTraversal is using Queue and while loop
//   preOrderTraversal() {
//         if(this.root === null) {
//             return;
//         }
//         let Queue = [];
//         Queue.push(this.root);
//         while(Queue.length > 0) {
//             const current = Queue.shift();
//             console.log(current.data);
//             if(current.right !== null){
//                 Queue.unshift(current.right);
//             }
//             if(current.left !== null) {
//                 Queue.unshift(current.left);
//             }

//         }
//   }
