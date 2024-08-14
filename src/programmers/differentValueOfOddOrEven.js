function solution(n) {
  if (n % 2 === 1) {
    const sum = Array.from({ length: n + 1 }).reduce(
      (acc, _, index) => (index % 2 === 1 ? acc + index : acc),
      0
    );

    return sum;
  }

  if (n % 2 === 0) {
    const sum = Array.from({ length: n + 1 }).reduce(
      (acc, _, index) => (index % 2 === 0 ? acc + index ** 2 : acc),
      0
    );

    return sum;
  }
}

solution(7);
solution(10);
