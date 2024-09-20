function solution(number) {
  return [...number].reduce((acc, curr) => (acc += Number(curr)), 0) % 9;
}

solution('78720646226947352489');
