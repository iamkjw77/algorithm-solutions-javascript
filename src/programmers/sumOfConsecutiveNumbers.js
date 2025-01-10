function solution(num, total) {
  const min = Math.ceil(total / num - num / 2);

  return Array(num)
    .fill(0)
    .map((_, i) => min + i);
}

solution(3, 12);
solution(5, 5);
solution(4, 14);
solution(4, 2);
