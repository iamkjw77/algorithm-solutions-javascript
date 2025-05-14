function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count === 500) break;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count === 500 ? -1 : count;
}

solution(6);
solution(16);
solution(626331);
