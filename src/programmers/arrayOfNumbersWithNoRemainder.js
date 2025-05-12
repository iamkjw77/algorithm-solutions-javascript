function solution(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  return result.length === 0 ? [-1] : result;
}

solution([5, 9, 7, 10], 5);
