function solution(sides) {
  const answer = [];
  const [min, max] = sides.sort((a, b) => a - b);

  for (let i = max - min + 1; i < max; i++) {
    answer.push(i);
  }

  for (let i = max; i < min + max; i++) {
    answer.push(i);
  }

  return answer.length;
}

solution([1, 2]);
solution([3, 6]);
solution([11, 7]);
