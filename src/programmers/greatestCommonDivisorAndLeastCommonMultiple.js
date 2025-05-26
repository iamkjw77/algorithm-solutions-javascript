function greatestCommonDivisor(n, m) {
  return m ? greatestCommonDivisor(m, n % m) : Math.abs(n);
}

function solution(n, m) {
  const gcd = greatestCommonDivisor(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}

solution(3, 12);
solution(12, 3);
solution(2, 5);
solution(12, 18);
