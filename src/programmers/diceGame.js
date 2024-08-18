function solution(a, b, c) {
  const set = new Set([a, b, c]);
  const count = [...set].length;

  if (count === 1) {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  } else if (count === 3) {
    return a + b + c;
  } else {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
}

solution(2, 6, 1);
solution(5, 3, 3);
solution(4, 4, 4);
