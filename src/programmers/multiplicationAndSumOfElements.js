function solution(num_list) {
  const mul = num_list.reduce((acc, curr) => acc * curr, 1);
  const sum = num_list.reduce((acc, curr) => acc + curr, 0);

  return mul > sum ** 2 ? 0 : 1;
}

solution([3, 4, 5, 2, 1]);
solution([5, 7, 8, 3]);
