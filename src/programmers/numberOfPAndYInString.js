function solution(s) {
  const lowerCase = [...s.toLowerCase()];
  const pCount = lowerCase.filter((str) => str === 'p').length;
  const yCount = lowerCase.filter((str) => str === 'y').length;

  return pCount === yCount;
}

solution('pPoooyY');
