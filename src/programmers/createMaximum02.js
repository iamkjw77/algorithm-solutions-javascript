function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);

  const a = sorted[0] * sorted[1];
  const b = sorted[sorted.length - 1] * sorted[sorted.length - 2];

  return Math.max(a, b);
}

solution([1, 2, -3, 4, -5]);
solution([0, -31, 24, 10, 1, 9]);
solution([10, 20, 30, 5, 5, 20, 5]);
solution([0, -1]);
