function solution(x) {
  return x % [...(x + '')].reduce((acc, curr) => acc + Number(curr), 0) === 0
    ? true
    : false;
}
