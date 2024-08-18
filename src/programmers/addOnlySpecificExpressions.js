function solution(a, d, included) {
  return included.reduce(
    (acc, curr, index) => (curr ? acc + a + d * index : acc),
    0
  );
}

solution(3, 4, [true, false, false, true, true]);
solution(7, 1, [false, false, false, true, false, false, false]);
