function solution(sides) {
  const [a, b, c] = sides.sort();

  return a + b > c ? 1 : 2;
}

solution([1, 2, 3]);
solution([3, 6, 2]);
