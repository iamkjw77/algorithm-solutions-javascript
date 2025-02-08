function solution(i, j, k) {
  let str = '';

  for (i; i <= j; i++) {
    str += i;
  }

  return str.split(k).length - 1;
}

solution(1, 13, 1);
