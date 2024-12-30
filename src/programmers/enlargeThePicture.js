function solution(picture, k) {
  let answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, curr) => acc + curr.repeat(k), '');

    for (let i = 0; i < k; i++) {
      answer.push(expanded);
    }
  });

  return answer;
}

solution(
  [
    '.xx...xx.',
    'x..x.x..x',
    'x...x...x',
    '.x.....x.',
    '..x...x..',
    '...x.x...',
    '....x....',
  ],
  2
);
