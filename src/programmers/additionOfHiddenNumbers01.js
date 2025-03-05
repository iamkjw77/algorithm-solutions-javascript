function solution(my_string) {
  return [...my_string].reduce(
    (acc, curr) => (curr.match(/\d+/) ? acc + Number(curr) : acc),
    0
  );
}

solution('aAb1B2cC34oOp');
solution('1a2b3c4d123');
