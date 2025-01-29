function solution(n) {
  const answer = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer;
}

solution([1, 2, 3, 4, 6, 8, 12, 24]);
