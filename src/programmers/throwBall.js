function solution(numbers, k) {
  const index = ((k - 1) * 2) % numbers.length;
  return numbers[index];
}

solution([1, 2, 3, 4], 2);
solution([1, 2, 3, 4, 5, 6], 5);
solution([1, 2, 3], 3);
