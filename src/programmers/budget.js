function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let count = 0;
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sum + sorted[i] > budget) break;

    sum += sorted[i];
    count++;
  }

  return count;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
