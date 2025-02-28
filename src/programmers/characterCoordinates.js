function solution(keyinput, board) {
  const maxRow = Math.floor(board[0] / 2);
  const maxCol = Math.floor(board[1] / 2);
  const result = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case 'up':
        if (result[1] < maxCol) result[1]++;
        break;
      case 'down':
        if (result[1] > -maxCol) result[1]--;
        break;
      case 'left':
        if (result[0] > -maxRow) result[0]--;
        break;
      case 'right':
        if (result[0] < maxRow) result[0]++;
        break;
    }
  }

  return result;
}

solution(['left', 'right', 'up', 'right', 'right'], [11, 11]);
solution(['down', 'down', 'down', 'down', 'down'], [7, 9]);
solution(['right', 'right', 'right', 'right', 'right', 'left'], [9, 5]);
