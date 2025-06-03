function solution(sizes) {
  let x = 0;
  let y = 0;

  const rotated = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  for (let i = 0; i < rotated.length; i++) {
    if (x < rotated[i][0]) {
      x = rotated[i][0];
    }
    if (y < rotated[i][1]) {
      y = rotated[i][1];
    }
  }

  return x * y;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);

solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
