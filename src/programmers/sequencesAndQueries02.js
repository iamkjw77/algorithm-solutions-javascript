function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((num) => num > k)
        .sort((a, b) => a - b)[0] || -1
  );
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [2, 4, 2],
  ]
);

solution([2, 10], [[0, 1, 1]]);
solution([2, 1, 3, 4, 5, 6], [[2, 5, 2]]);
