export class Box<T> {
  public val: T;
  public next: Box<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class CircularLinkedList<T> {
  private head: Box<T> | null;
  constructor(val: T) {
    this.head = new Box(val);
    this.head.next = this.head;
  }

  insertAtBeginning(val: T) {
    let node = new Box(val);
    node.next = node;
    if (this.head === null) {
      this.head = node;
      return;
    }

    let tmp = this.head;
    while (tmp.next !== this.head && tmp.next !== null) {
      tmp = tmp.next;
    }

    node.next = this.head;
    tmp.next = node;
    this.head = node;
  }

  insetAtEnd(val: T) {
    let node = new Box(val);
    node.next = node;

    if (this.head === null) {
      this.head = node;
      return;
    }

    let tmp = this.head;
    while (tmp.next !== this.head && tmp.next !== null) tmp = tmp.next;
    tmp.next = node;
    node.next = this.head;
  }

  traverse() {
    let tmp = this.head;
    if (tmp === null) return;

    console.log(tmp.val);
    tmp = tmp.next;
    while (tmp !== this.head && tmp !== null) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }
}

const list = new CircularLinkedList(10);
list.insertAtBeginning(20);
list.insertAtBeginning(40);
list.insetAtEnd(1);
list.insetAtEnd(2);
list.insetAtEnd(3);

list.traverse();
