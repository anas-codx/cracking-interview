const str = "aaabbeeccdeffer";

function compress(str: string) {
  let list: [string, number][] = [];
  for (let i = 0; i < str.length; i++) {
    if (list.length == 0) {
      list.push([str.charAt(i), 0]);
      continue;
    }

    if (list[list.length - 1][0] === str.charAt(i)) {
      list[list.length - 1][1] += 1;
    } else {
      list.push([str.charAt(i), 0]);
    }
  }

  let x = [];

  for (let i = 0; i < list.length; i++) {
    x.push(list[i][0] + (list[i][1] || ""));
  }
  return x.length < str.length ? x.join("") : str;
}

console.log(compress(str));
