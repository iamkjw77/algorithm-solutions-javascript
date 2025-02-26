function solution(polynomial) {
  const arr = polynomial.split(' + ');
  const xNum = arr
    .filter((num) => num.includes('x'))
    .map((num) => num.replace('x', '') || 1)
    .reduce((acc, curr) => acc + Number(curr), 0);

  const num = arr
    .filter((num) => !isNaN(num))
    .reduce((acc, curr) => acc + Number(curr), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum == 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  return answer.join(' + ');
}

solution('3x + 7 + x');
solution('x + x + x');
solution('10x');
