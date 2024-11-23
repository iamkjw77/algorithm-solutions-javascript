function solution(arr) {
  return arr.map((num) => Array(num).fill(num)).flat();
}

solution([5, 1, 4]);
