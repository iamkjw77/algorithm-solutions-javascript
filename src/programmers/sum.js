function solution(line) {
  const [a, b] = line.split(' ');
  console.log(`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`);
}

solution('4 5');
