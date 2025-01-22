function solution(n) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr), 0);
}
