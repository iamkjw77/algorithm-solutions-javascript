function solution(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;

  const result = Array.from({ length: row }, () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
solution([[1], [2]], [[3], [4]]);
