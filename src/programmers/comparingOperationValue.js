function solution(a, b) {
  return Math.max(Number(`${a}${b}`), 2 * a * b);
}

solution(2, 91);
solution(91, 2);
