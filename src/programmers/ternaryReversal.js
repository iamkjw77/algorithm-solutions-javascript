function solution(n) {
  let ternary = '';

  while (n >= 3) {
    ternary += n % 3;
    n = Math.floor(n / 3);
  }

  ternary += n;

  return [...ternary].reduce(
    (acc, curr, i) => acc + 3 ** (ternary.length - 1 - i) * +curr,
    0
  );
}

solution(99999999);
solution(125);
