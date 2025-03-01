function solution(dots) {
  const sortedX = dots.sort((a, b) => a[0] - b[0]);
  const sortedY = dots.sort((a, b) => a[1] - b[1]);

  const maxX = sortedX[sortedX.length - 1][0];
  const maxY = sortedY[sortedY.length - 1][1];
  const minX = sortedX[0][0];
  const minY = sortedX[0][1];

  const width = maxX - minX;
  const height = maxY - minY;

  return width * height;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);

solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);

solution([
  [0, 0],
  [-3, 0],
  [0, -3],
  [-3, -3],
]);
