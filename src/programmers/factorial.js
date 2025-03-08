function solution(n) {
  let result = 1;
  let answer = 1;

  for (let i = 2; result * i <= n; i++) {
    result *= i;
    answer = i;
  }

  return answer;
}

solution(3628800);
solution(7);
solution(2);
