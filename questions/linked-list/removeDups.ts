class Box {
  public val: number;
  public next: Box | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  private head: Box | null;

  constructor(val: number) {
    this.head = new Box(val);
  }

  push(val: number) {
    let node = new Box(val);
    node.next = this.head;
    this.head = node;
  }

  removeDups() {
    let tmp = this.head;

    let hasmap: { [key: number]: boolean } = {};
    if (tmp === null) return;

    hasmap[tmp.val] = true;
    while (tmp.next !== null && tmp.next.next !== null) {
      if (hasmap[tmp.next.val]) {
        tmp.next = tmp.next.next;
      }
      hasmap[tmp.next.val] = true;
      tmp = tmp!.next;
    }
  }

  traverse() {
    let tmp = this.head;
    if (tmp === null) return;
    while (tmp != null) {
      console.log(tmp.val);
      tmp = tmp.next;
    }
  }
}

const list = new LinkedList(10);
list.push(20);
list.push(20);
list.push(30);
list.push(30);
list.push(40);
list.push(40);
list.traverse();
list.removeDups();
console.log("---");
list.traverse();
