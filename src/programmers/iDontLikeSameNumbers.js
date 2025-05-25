function solution(arr) {
  return arr.filter((num, i) => num !== arr[i + 1]);
}

solution([1, 1, 3, 3, 0, 1, 1]);
solution([4, 4, 4, 3, 3]);
