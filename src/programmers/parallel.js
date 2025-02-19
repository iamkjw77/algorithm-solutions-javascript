function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;

  return 0;
}

function calculateSlope(a, b) {
  return (b[0] - a[0]) / (b[1] - a[1]);
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);

solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]);
