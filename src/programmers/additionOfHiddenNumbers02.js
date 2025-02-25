function solution(my_string) {
  return my_string
    .replace(/[A-z]/g, ' ')
    .split(' ')
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}

solution('aAb1B2cC34oOp');
solution('1a2b3c4d123Z');
solution('aaaaa');
solution('123');
