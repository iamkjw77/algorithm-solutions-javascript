function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}

solution([1, 2, 3, 4, 5]);
solution([0, 31, 24, 10, 1, 9]);
