function solution(s) {
  const arr = s.split(' ');
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === 'Z' || arr[i] === 'Z') continue;

    sum += arr[i] * 1;
  }

  return sum;
}

solution('1 2 Z 3');
solution('10 20 30 40');
solution('10 Z 20 Z 1');
solution('10 Z 20 Z');
solution('-1 -2 -3 Z');
