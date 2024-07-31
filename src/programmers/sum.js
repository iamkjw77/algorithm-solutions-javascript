function solution(line) {
  input = line.split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  const result = a + b;

  console.log(`${a} + ${b} = ${result}`);
}

solution('4 5');
