class Box<T> {
  public val: T;
  public next: Box<T> | null;
  public prev: Box<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: Box<T> | null;
  constructor(val: T) {
    this.head = new Box<T>(val);
  }

  insertAtBeginning(val: T) {
    let node = new Box<T>(val);
    if (this.head !== null) {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;
  }

  deleteFirst(): T | null {
    if (this.head === null) return null;
    let node = this.head;
    this.head = this.head.next;
    return node.val;
  }

  insertAtEnd(val: T) {
    let node = new Box<T>(val);
    let tmp = this.head;
    if (tmp === null) {
      this.head = node;
      return;
    }

    // iterate to at the end
    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    tmp.next = node;
    node.prev = tmp;
  }

  deleteLast(): T | null {
    if (this.head === null) return null;

    // move to the end
    let tmp = this.head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }

    if (tmp.prev) tmp.prev.next = null;

    return tmp?.val || null;
  }

  traverse() {
    let tmp = this.head;
    while (tmp !== null) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }
}

const list = new DoublyLinkedList(3);
list.insertAtBeginning(4);
list.insertAtBeginning(5);
list.insertAtBeginning(6);
list.insertAtBeginning(9);
list.insertAtEnd(30);
list.traverse();
console.log(`deleted ${list.deleteFirst()}`);
console.log(`deleted ${list.deleteLast()}`);
console.log(`deleted ${list.deleteLast()}`);
