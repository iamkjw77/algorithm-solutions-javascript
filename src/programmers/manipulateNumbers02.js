function solution(numLog) {
  let result = '';

  const differences = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };

  [...numLog].map((_num, i) => {
    if (i === numLog.length - 1) return;
    result += differences[numLog[i + 1] - numLog[i]];
  });

  return result;
}

solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);
