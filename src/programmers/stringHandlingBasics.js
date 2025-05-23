function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    [...s].every((str) => Number.isInteger(str * 1))
  );
}

solution('a234');
solution('1234');
