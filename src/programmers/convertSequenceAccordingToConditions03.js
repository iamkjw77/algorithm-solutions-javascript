function solution(arr, k) {
  return arr.map((num) => (k % 2 === 0 ? num + k : num * k));
}

solution([1, 2, 3, 100, 99, 98], 3);
