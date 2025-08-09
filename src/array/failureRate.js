function solution(N, stages) {
  const failureRate = [];

  for (let i = 1; i <= N; i++) {
    const failCount = stages.filter((stage) => stage === i).length;
    const challengeCount = stages.filter((stage) => stage >= i).length;

    failureRate.push(failCount / challengeCount);
  }

  const answer = failureRate.map((rate, index) => ({
    stage: index + 1,
    rate,
  }));

  return answer.sort((a, b) => b.rate - a.rate).map((fail) => fail.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);
solution(6, [2, 2, 2, 2, 2, 2, 2, 2, 2]);
