function solution(n) {
  const answer = [];

  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}

solution(12);
solution(17);
solution(420);
