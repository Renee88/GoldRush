class Node {
    constructor(value){
        this.value = value;
        this.downPath = null; 
        this.rightPath = null; 
    }

    insertLeft(value) {
        if (!this.leftChild) {
              this.leftChild = new Node(value);
        } else {
              let newNode = new Node(value);
              newNode.leftChild = this.leftChild;
              this.leftChild = newNode
        }
  }

  insertRight(value) {
    if (!this.rightChild) {
        this.rightChild = new Node(value);
    } else {
        let newNode = new Node(value);
        newNode.rightChild = this.rightChild;
        this.rightChild = newNode
    }
}
}