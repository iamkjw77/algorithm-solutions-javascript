function solution(s) {
  if (s.length % 2 !== 0) return 0;
  let count = 0;
  const mapping = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === '(' || rotate[j] === '[' || rotate[j] === '{') {
        stack.push(rotate[j]);
      } else {
        const top = stack.pop();
        if (top !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }

      if (flag) count++;
    }
  }
}

solution('[](){}');
solution('}]()[{');
solution('[)(]');
solution('}}}');
