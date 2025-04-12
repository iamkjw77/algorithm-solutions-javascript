function solution(array) {
  const sorted = array.sort((a, b) => a - b);

  return sorted[Math.floor(sorted.length / 2)];
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
