function solution(s) {
  const answer = [];
  const counter = new Map();

  for (let i = 0; i < s.length; i++) {
    counter.set(s[i], (counter.get(s[i]) || 0) + 1);
  }

  const arr = [...counter];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j][1] === 1) answer.push(arr[j][0]);
  }

  return answer.sort().join('');
}

solution('abcabcadc');
