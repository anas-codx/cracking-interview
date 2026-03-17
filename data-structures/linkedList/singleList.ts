export class Box<T> {
  public val: T;
  public next: Box<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class List<T> {
  private head: Box<T> | null;
  constructor(val: T) {
    this.head = new Box<T>(val);
  }

  insertAtBeginning(val: T) {
    let node = new Box<T>(val);
    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(val: T) {
    let node = new Box<T>(val);
    let tmp = this.head;
    if (tmp === null) {
      this.head = node;
      return;
    }
    while (tmp.next !== null) tmp = tmp.next;
    tmp.next = node;
  }

  insertAt(val: T, pos: number) {
    let node = new Box<T>(val);
    if (pos <= 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let tmp = this.head;
    while (--pos != 0 && tmp!.next !== null) tmp = tmp!.next;
    if (tmp === null) return;
    node.next = tmp.next;
    tmp.next = node;
  }

  deleteFirst(): T | null {
    if (this.head) {
      let nd = this.head.val;
      this.head = this.head.next;
      return nd;
    }
    return null;
  }

  deleteLast(): T | null {
    if (this.head) {
      let tmp = this.head;
      if (tmp.next === null) {
        this.head = tmp.next;
        return tmp.val;
      }
      while (tmp.next !== null && tmp.next.next !== null) tmp = tmp.next;
      let n = tmp.next!.val;
      tmp.next = null;
      return n;
    }
    return null;
  }

  deleteAt(pos: number): T | null {
    if (this.head === null) return null;
    let n = null;
    let tmp = this.head;
    if (pos === 0) {
      n = this.head.val;
      this.head = this.head.next;
    } else if (pos === 1 && tmp.next) {
      n = tmp.next.val;
      this.head.next = tmp.next.next;
    } else {
      while (--pos !== 0 && tmp.next !== null && tmp.next.next !== null)
        tmp = tmp.next;
      n = tmp.next!.val;
      tmp.next = tmp.next!.next;
    }
    return n;
  }

  traverse() {
    let tmp = this.head;
    while (tmp !== null) {
      console.log(`node -> ${tmp.val}`);
      tmp = tmp.next;
    }
  }
}
