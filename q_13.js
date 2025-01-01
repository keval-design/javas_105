const N = 3;
const M = 3;
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let row = 0, col = M - 1;

while (row < N && col >= 0) {
  let i = row, j = col;
  while (i < N && j < M) {
    console.log(arr[i][j]);
    i++;
    j++;
  }
  if (col > 0) {
    col--;
  } else {
    row++;
  }
}
