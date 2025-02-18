function solution(lines) {
  const count = new Map();

  for (let i = 0; i < lines.length; i++) {
    const [a, b] = lines[i];

    for (let j = a; j <= b; j++) {
      if (j !== a) {
        count.set(j, (count.get(j) || 0) + 1);
      }
    }
  }

  const answer = [...count].filter((a) => a[1] > 1).length;

  return answer;
}

solution([
  [3, 9],
  [2, 5],
  [0, 1],
]);
solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);
solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
