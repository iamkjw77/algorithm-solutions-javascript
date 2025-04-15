function GCD(a, b) {
  return a % b ? GCD(b, a % b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
  const denom = denom1 * denom2;
  const num1 = (denom / denom1) * numer1;
  const num2 = (denom / denom2) * numer2;

  const sum = num1 + num2;

  const gcd = GCD(denom, sum);

  return [sum / gcd, denom / gcd];
}

solution(1, 2, 3, 4);
solution(9, 2, 1, 3);
solution(5, 2, 5, 2);
