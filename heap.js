class Heap {
  constructor() {
    this.heapContainer = [];
  }
  toString() {
      return this.heapContainer.toString();
  }
  isEmpty() {
      return this.heapContainer.length === 0;
  }
  add(item) {
    this.heapContainer.push(item);
    this.heapify();
    return this;
  }
  peek() {
    if (this.heapContainer.length <= 0) {
      return null;
    }
    return this.heapContainer[0];
  }
  poll() {
    if (this.heapContainer.length <= 0) {
      return null;
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }
    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }
  remove(item) {

  }
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getRightChildIndex(currentIndex);
      }

      if (
        !this.pairIsInCorrectOrder(
          this.heapContainer[nextIndex],
          this.heapContainer[currentIndex]
        )
      ) {
        break;
      }
      this.swap(nextIndex, currentIndex);
      currentIndex = nextIndex;
    }
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  hasRightChild(currentIndex) {
    return this.getRightChildIndex(currentIndex) < this.heapContainer.length;
  }
  heapifyUp(currentIndex = this.heapContainer.length - 1) {
    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
    ) {
      this.swap(currentIndex, this.getParentIndex(childIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  swap(toIndex, fromIndex) {
    [this.heapContainer[toIndex], this.heapContainer[fromIndex]] = [
      this.heapContainer[fromIndex],
      this.heapContainer[toIndex]
    ];
  }
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
          You have to implement heap pair comparision method
          for ${firstElement} and ${secondElement} values.
        `);
  }
}
