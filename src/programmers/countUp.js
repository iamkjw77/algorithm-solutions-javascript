function solution(start_num, end_num) {
  let copyStartNum = start_num;

  return Array.from({ length: end_num - start_num + 1 }, () => copyStartNum++);
}

solution(3, 10);
