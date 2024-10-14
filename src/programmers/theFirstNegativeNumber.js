function solution(num_list) {
  return num_list.findIndex((num) => num < 0);
}

solution([12, 4, 15, 46, 38, -2, 15], 5);
