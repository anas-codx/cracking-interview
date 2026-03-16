class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.node = null;
    this.isEmpty = true;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.node === null) {
      this.node = node;
      this.isEmpty = false;
    } else {
      node.next = this.node;
      this.node = node;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty) {
      throw new Error("stack is empty");
    } else {
      let node = this.node;
      this.node = this.node.next;
      if (this.node === null) {
        this.isEmpty = true;
      }
      this.size--;
      return node.value;
    }
  }
  top() {
    return this.node?.value;
  }
}
