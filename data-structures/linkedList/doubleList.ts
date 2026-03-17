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

  insertAt(val: T, pos: number) {
    let node = new Box(val);
    if (pos < 1) {
      if (this.head === null) {
        this.head = node;
        return;
      }
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      if (this.head === null) return;
      let tmp = this.head;
      while (--pos > 0 && tmp.next !== null) {
        tmp = tmp.next;
      }
      node.next = tmp.next;
      node.prev = tmp;
      if (tmp.next !== null) {
        tmp.next.prev = node;
      }
      tmp.next = node;
    }
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

const list = new DoublyLinkedList(4);
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtEnd(30);
list.insertAt(100, 6);
list.traverse();
