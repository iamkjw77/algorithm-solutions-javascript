function solution(array, n) {
  return array.filter((num) => num === n).length;
}

solution([1, 1, 2, 3, 4, 5], 1);
solution([0, 2, 3, 4], 1);
