function solution(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals;
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}

solution(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ]
);
