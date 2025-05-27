function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const sub = t.substring(i, i + p.length);

    if (+sub <= +p) {
      count++;
    }
  }

  return count;
}

solution('3141592', '271');
solution('500220839878', '7');
solution('10203', '15');
