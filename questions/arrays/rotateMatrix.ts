function getRandomInt(min: number, max: number): number {
  // Ensure min and max are integers
  const lower = Math.ceil(min);
  const upper = Math.floor(max);

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

let n = 4;
const mat: number[][] = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => getRandomInt(0, 9)),
);

mat.forEach((row) => console.log(row));

for (let i = 0; i < n / 2; i++) {
  for (let j = i; j < n - i - 1; j++) {
    let temp = mat[j][i];
    mat[j][i] = mat[n - 1 - i][j];
    mat[n - 1 - i][j] = mat[n - 1 - j][n - 1 - i];
    mat[n - 1 - j][n - 1 - i] = mat[i][n - 1 - j];
    mat[i][n - 1 - j] = temp;
  }
}

console.log("----------------------");
mat.forEach((row) => console.log(row));
