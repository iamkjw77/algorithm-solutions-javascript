function solution(m1, m2) {
  const a = m1.length;
  const b = m2[0].length;
  const answer = Array.from({ length: a }, () => Array(b).fill(0));

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      answer[i][j] = m1[i].reduce(
        (acc, curr, index) => acc + curr * m2[index][j],
        0
      );
    }
  }

  return answer;
}

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
solution(
  [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],
  [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ]
);
