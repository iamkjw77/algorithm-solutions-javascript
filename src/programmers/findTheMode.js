function solution(array) {
  const count = new Map();

  for (let i = 0; i < array.length; i++) {
    count.set(array[i], (count.get(array[i]) || 0) + 1);
  }

  const sorted = [...count].sort((a, b) => b[1] - a[1]);

  if (sorted.length === 1 || sorted[0][1] !== sorted[1][1]) {
    return sorted[0][0];
  }

  return -1;
}

solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);
