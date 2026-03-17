class TwoStack<T> {
  private stack: T[];
  private topX = 0;
  private topY: number;

  constructor(size: number) {
    this.stack = Array.from({ length: size });
    this.topY = size - 1;
  }

  pushA(val: T) {
    if (this.topX == this.topY) throw new Error("Stack A overflow");
    this.stack[this.topX++] = val;
  }
  pushB(val: T) {
    if (this.topX == this.topY) throw new Error("Stack B overflow");
    this.stack[this.topY--] = val;
  }

  popA() {
    if (this.topX - 1 < 0) {
      this.topX = 0;
      throw new Error("Stack A underflow");
    }
    return this.stack[--this.topX];
  }
  popB() {
    if (this.topY + 1 >= this.stack.length) {
      this.topY = this.stack.length - 1;
      throw new Error("Stack B underflow");
    }
    return this.stack[++this.topY];
  }

  display() {
    console.log(this.stack);
  }
}

const stack = new TwoStack(10);
stack.pushA(1);
stack.pushA(2);
stack.pushA(3);
stack.pushB(3);
stack.pushB(2);
stack.pushB(1);
stack.pushB(0);

stack.display();

console.log(stack.popA());
console.log(stack.popA());
console.log(stack.popA());
console.log(stack.popB());
console.log(stack.popB());
console.log(stack.popB());
console.log(stack.popB());
