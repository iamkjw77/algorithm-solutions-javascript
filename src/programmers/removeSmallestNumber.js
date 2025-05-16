function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length === 0 ? [-1] : arr;
}

solution([4, 3, 2, 1]);
solution([10]);
