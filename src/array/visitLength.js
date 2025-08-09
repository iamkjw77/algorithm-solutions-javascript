const direction = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0],
};

function solution(dirs) {
  let x = 0;
  let y = 0;
  const visited = [];

  for (let i = 0; i < dirs.length; i++) {
    const [dx, dy] = direction[dirs[i]];

    // 범위를 벗어나면 추가하지 않음
    if (x + dx < -5 || x + dx > 5 || y + dy < -5 || y + dy > 5) {
      continue;
    }

    // A -> B, B -> A 추가(경로 수는 방향성 없음)
    visited.push(`${x},${y} ${x + dx},${y + dy}`);
    visited.push(`${x + dx},${y + dy} ${x},${y}`);

    x += dx;
    y += dy;
  }

  return new Set(visited).size / 2;
}

solution("ULURRDLLU");
solution("LULLLLLLU");
