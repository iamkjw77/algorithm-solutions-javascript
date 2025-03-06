function solution(my_string) {
  return [...my_string]
    .filter((str) => str.match(/\d+/))
    .sort((a, b) => Number(a) - Number(b))
    .map((str) => Number(str));
}

solution('hi12392');
solution('p2o4i8gj2');
solution('abcde0');
