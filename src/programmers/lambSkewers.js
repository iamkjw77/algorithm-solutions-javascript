function solution(n, k) {
  const service = Math.floor(n / 10);

  return 12000 * n + 2000 * (k - service);
}

solution(10, 3);
solution(64, 6);
