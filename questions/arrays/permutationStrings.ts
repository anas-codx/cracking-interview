let a = "test";
let b = "anas";

function solve(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  let x = a.split("").sort().join("");
  let y = b.split("").sort().join("");

  return x === y;
}

console.log(solve(a, b));
