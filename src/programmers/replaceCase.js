function solution(line) {
  const str = line[0];
  const result = str
    .split('')
    .map((string) =>
      string === string.toLowerCase()
        ? string.toUpperCase()
        : string.toLowerCase()
    )
    .join('');

  console.log(result);
}

solution('AaBbCc');
