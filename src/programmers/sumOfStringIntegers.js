function solution(num_str) {
  return [...num_str].reduce((acc, curr) => acc + +curr, 0);
}

solution('123456789');
