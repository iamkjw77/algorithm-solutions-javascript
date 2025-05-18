function solution(a, b) {
  return a.reduce((acc, curr, i) => acc + curr * b[i], 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);
