function solution(arr, query) {
  query.map((num, i) => (i % 2 ? arr.splice(0, num) : arr.splice(num + 1)));

  return arr;
}

solution([0, 1, 2, 3, 4, 5], [4, 1, 2], [1, 2, 3]);
