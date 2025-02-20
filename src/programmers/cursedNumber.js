function solution(n) {
  let answer = 1;

  for (let i = 1; i < n; i++) {
    answer++;

    while (answer % 3 === 0 || (answer + '').includes('3')) {
      answer++;
    }
  }

  return answer;
}

solution(15);
solution(40);
