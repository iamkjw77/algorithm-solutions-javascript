function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, i) => curr * (signs[i] ? 1 : -1) + acc,
    0
  );
}

solution([4, 7, 12], [true, false, true]);
