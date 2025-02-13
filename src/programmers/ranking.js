function solution(score) {
  const sum = score.map(([e, m]) => e + m);
  const sorted = [...sum].sort((a, b) => b - a);
  return sum.map((num) => sorted.indexOf(num) + 1);
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
