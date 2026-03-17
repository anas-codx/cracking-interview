function getRandomInt(min: number, max: number): number {
  // Ensure min and max are integers
  const lower = Math.ceil(min);
  const upper = Math.floor(max);

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

let [m, n] = [4, 3];
const mat: number[][] = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => getRandomInt(0, 9)),
);

mat.forEach((row) => console.log(row));

let mask = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (mat[i][j] === 0) mask.push([i, j]);
  }
}

for (let i = 0; i < mask.length; i++) {
  //set row to 0
  for (let j = 0; j < n; j++) {
    mat[mask[i][0]][j] = 0;
  }
  for (let k = 0; k < m; k++) {
    mat[k][mask[i][1]] = 0;
  }
}

console.log("--------------");
mat.forEach((row) => console.log(row));
