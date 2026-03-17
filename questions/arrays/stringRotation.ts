function stringRotation(x: string, y: string): boolean {
  return (x + x).includes(y);
}

console.log(stringRotation("waterbottle", "erbottlewat"));
console.log(stringRotation("waterbottle", "anas"));
