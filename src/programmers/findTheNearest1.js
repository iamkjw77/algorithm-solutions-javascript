function solution(arr, idx) {
  return arr.findIndex((num, i) => i >= idx && num === 1);
}

solution([1, 1, 1, 1, 0], 3);
