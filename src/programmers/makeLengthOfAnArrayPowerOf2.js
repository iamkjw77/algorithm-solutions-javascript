function solution(arr) {
  let i = 0;

  while (arr.length > 2 ** i) {
    i++;
  }

  return [...arr, ...Array(2 ** i - arr.length).fill(0)];
}

solution([1, 2, 6, 4, 4, 5]);
