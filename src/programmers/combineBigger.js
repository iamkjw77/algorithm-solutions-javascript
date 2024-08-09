function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

solution(1, 1);
solution(1, 2);
solution(12, 7);
