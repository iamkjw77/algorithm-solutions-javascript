function solution(n) {
  const stack = [];

  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }

  return stack.reverse().join("");
}

solution(10); // 1010
solution(27); // 11011
solution(12345); // 11000000111001
