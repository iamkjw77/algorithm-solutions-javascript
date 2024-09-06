function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    const isAllZeroOrFive = [...String(i)].every(
      (num) => num === '0' || num === '5'
    );

    if (isAllZeroOrFive) {
      answer.push(i);
    }
  }

  return answer.length > 0 ? answer : [-1];
}
