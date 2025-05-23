const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

function solution(balls, share) {
  return Math.round(
    factorial(balls) / factorial(balls - share) / factorial(share)
  );
}

solution(3, 2); // 3
solution(5, 3); // 10
