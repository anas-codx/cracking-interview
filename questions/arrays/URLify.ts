let s = "my name is mohd anas        ";
let n = 20;

function urlify(s: string, n: number): string {
  let arr = s.split("");
  let j = s.length - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] !== " ") {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    } else {
      arr[j] = "0";
      arr[j - 1] = "2";
      arr[j - 2] = "%";
      j = j - 3;
    }
  }
  const result = arr.join("");
  console.log(result);
  return result;
}

urlify(s, n);
