const N = 4;
const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

let result = [];

for (let i = 0; i < N; i++) {
  result.push(arr[0][i]);
}

for (let i = 1; i < N; i++) {
  result.push(arr[i][N - 1]);
}

for (let i = N - 2; i >= 0; i--) {
  result.push(arr[N - 1][i]);
}

for (let i = N - 2; i > 0; i--) {
  result.push(arr[i][0]);
}

console.log(result);



