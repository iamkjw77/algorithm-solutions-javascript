function solution(arr) {
  const rows = arr.length;
  const columns = arr[0].length;
  const diff = Math.abs(rows - columns);

  if (rows > columns) {
    return arr.map((row) => [...row, ...Array.from({ length: diff }).fill(0)]);
  }

  if (rows < columns) {
    return [
      ...arr,
      ...Array.from({ length: diff }, () => Array(columns).fill(0)),
    ];
  }

  return arr;
}

solution([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);

solution([
  [57, 192, 534, 2],
  [9, 345, 192, 999],
]);

solution([
  [1, 2],
  [3, 4],
]);
