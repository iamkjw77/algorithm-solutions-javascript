function solution(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
