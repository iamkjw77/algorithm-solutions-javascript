function solution(a, b) {
  const min = Math.min(a, b);
  let maxDivisor = 1;

  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      maxDivisor = i;
      break;
    }
  }

  b = b / maxDivisor;

  for (let i = 2; i <= b; i++) {
    if (b % i === 0) {
      if (i % 2 !== 0 && i % 5 !== 0) {
        return 2;
      }
    }
  }

  return 1;
}

solution(7, 20);
solution(11, 22);
solution(12, 21);
solution(2, 999);
