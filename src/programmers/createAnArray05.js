function solution(intStrs, k, s, l) {
  return intStrs
    .map((intStr) => +intStr.slice(s, s + l))
    .filter((num) => num > k);
}

solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5);
