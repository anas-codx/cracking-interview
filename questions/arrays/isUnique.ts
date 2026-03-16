let str = "anstegwhil";

function isUnique(str: string[]): boolean {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[i] == str[j] && i !== j) return false;
    }
  }
  return true;
}

function isUnique2(str: string[]): boolean {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i].charCodeAt(0) - 97;
    if ((checker & (1 << c)) > 0) return false;
    checker |= 1 << c;
  }
  return true;
}

console.log(isUnique(str.split("")));
console.log(isUnique2(str.split("")));
