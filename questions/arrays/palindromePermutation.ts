let str = ["tact coa", "taco cat", "atco cta", "anas", "madam", "tactcoapapa"];

function checkValid(input: string[]) {
  let hashmap: { [key: string]: number } = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") continue;
    hashmap[input[i]] = hashmap[input[i]] ? 0 : 1;
  }

  for (let key in hashmap) {
    count += hashmap[key];
  }
  return count === 0 || count === 1;
}

function checkValid2(input: string) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") continue;
    let x = input.charCodeAt(i) - 97;
    if ((count & (1 << x)) != 0) {
      count &= ~(1 << x);
    } else {
      count |= 1 << x;
    }
  }
  return (count & (count - 1)) === 0;
}

for (let x of str) {
  console.log(x, "  --  ", checkValid(x.split("")), " == ", checkValid2(x));
}
