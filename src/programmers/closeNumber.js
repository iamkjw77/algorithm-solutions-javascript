function solution(array, n) {
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];
}

solution([10, 28, 3, 12], 20);
