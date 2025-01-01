const N = 5;

for (let i = 0; i < N; i++) {
  if (i === 0 || i === N - 1) {
    console.log('* '.repeat(N).trim());
  } else {
    console.log('*');
  }
}
