function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  let row = 0;
  let num = 1;

  while (num <= n * n) {
    for (let i = row; i < n - row; i++) {
      answer[row][i] = num;
      num++;
    }

    for (let i = row + 1; i < n - row; i++) {
      answer[i][n - 1 - row] = num;
      num++;
    }

    for (let i = n - row - 2; i >= row; i--) {
      answer[n - 1 - row][i] = num;
      num++;
    }

    for (let i = n - row - 2; i > row; i--) {
      answer[i][row] = num;
      num++;
    }

    row++;
  }

  return answer;
}

solution(4);
solution(5);
