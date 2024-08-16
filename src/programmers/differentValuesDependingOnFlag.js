function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

solution(-4, 7, true);
solution(-4, 7, false);
