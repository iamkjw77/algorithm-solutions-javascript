function solution(n) {
  let result = 1;

  while ((result * 6) % n !== 0) {
    result++;
  }

  return result;
}

solution(6);
solution(10);
solution(4);
