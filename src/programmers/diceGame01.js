function solution(a, b) {
  const isAEven = a % 2 === 0;
  const isBEven = b % 2 === 0;

  if (isAEven && isBEven) {
    return Math.abs(a - b);
  }

  if (isAEven || isBEven) {
    return 2 * (a + b);
  }

  return a ** 2 + b ** 2;
}

solution(3, 5);
