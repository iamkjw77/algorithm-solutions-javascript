function solution(rank, attendance) {
  const map = new Map();

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      map.set(rank[i], i);
    }
  }

  const [a, b, c] = [...map.entries()].sort((a, b) => a[0] - b[0]);

  return 10000 * a[1] + 100 * b[1] + c[1];
}

solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
