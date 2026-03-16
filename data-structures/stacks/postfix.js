import { Stack } from "./main.js";
const priority = {
  "(": 0,
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

function prefixToPostfix(exp) {
  let s = new Stack();
  let x = "";
  let postfix = [];
  for (let i = 0; i < exp.length; i++) {
    let e = exp[i];
    if (e === "(") s.push(e);
    else if (e === ")") {
      while ((x = s.pop()) !== "(") {
        postfix.push(x);
      }
    } else if (!priority[e]) {
      postfix.push(e);
    } else {
      while (priority[s.top()] >= priority[e]) postfix.push(s.pop());
      s.push(e);
    }
  }

  while (!s.isEmpty) {
    postfix.push(s.pop());
  }
  return postfix.join("");
}

function evaluate(postfix) {
  let s = new Stack();
  for (let i = 0; i < postfix.length; i++) {
    let e = postfix[i];
    if (!priority[e]) s.push(e);
    else {
      let b = parseInt(s.pop());
      let a = parseInt(s.pop());
      switch (e) {
        case "+":
          s.push(a + b);
          break;
        case "-":
          s.push(a - b);
          break;
        case "*":
          s.push(a * b);
          break;
        case "/":
          s.push(parseInt(a / b));
          break;
        default:
          break;
      }
    }
  }
  return s.pop();
}

let s = prefixToPostfix("1*2-(3+4)+6".split(""));
console.log(s);
console.log(evaluate(s.split("")));
