function solution(arr) {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return 1;
}

solution([
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
]);

solution([
  [19, 498, 258, 587],
  [63, 93, 7, 754],
  [258, 7, 1000, 723],
  [587, 754, 723, 81],
]);
