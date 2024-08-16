function solution(code) {
  let mode = 0;
  let ret = '';

  [...code].map((codeString, idx) => {
    if (codeString === '1') {
      mode = mode === 0 ? 1 : 0;
      return;
    }

    if (idx % 2 === mode) {
      ret += codeString;
    }
  });

  return ret || 'EMPTY';
}

solution('abc1abc1abc');
