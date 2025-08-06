function solution(answers) {
  const result = [];
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < arr.length; i++) {
    let score = 0;
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === arr[i][j % answers.length]) {
        score++;
      }
    }
    result.push(score);
  }

  const max = Math.max(...result);

  const answer = [];

  result.forEach((score, index) => {
    if (score === max) {
      answer.push(index + 1);
    }
  });

  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
