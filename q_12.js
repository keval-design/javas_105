const N = 3;
const M = 2;
const arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const sumOfIndexes = i + j;
    console.log(i, j, sumOfIndexes);
  }
}
