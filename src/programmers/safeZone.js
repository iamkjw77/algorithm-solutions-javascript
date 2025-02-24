function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            const targetI = i + k;
            const targetJ = j + l;

            if (board[targetI]?.[targetJ] === 0) {
              board[targetI][targetJ] = 2;
            }
          }
        }
      }
    }
  }

  return [...board.join()].filter((v) => v === '0').length;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);

solution([
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]);

solution([
  [0, 0, 0],
  [1, 0, 0],
  [0, 0, 0],
]);
