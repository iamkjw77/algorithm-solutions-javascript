function solution(n) {
  const answer = [];
  const str = n + '';

  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(Number(str[i]));
  }

  return answer;
}

solution(12345);
