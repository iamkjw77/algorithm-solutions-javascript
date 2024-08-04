function solution(line) {
  const result = Number(line) % 2 ? 'odd' : 'even';

  console.log(`${line} is ${result}`);
}

solution('100');
solution('1');
