function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

solution(60, 2, 3);
solution(55, 10, 5);
