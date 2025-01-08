function solution(babbling) {
  const wordSet = new Set(['aya', 'ye', 'woo', 'ma']);
  let result = 0;
  let remainWord = '';

  for (const word of babbling) {
    remainWord = '';

    for (const char of word) {
      remainWord += char;

      if (wordSet.has(remainWord)) {
        remainWord = '';
      }
    }

    if (remainWord === '') {
      result++;
    }
  }

  return result;
}

solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']);
solution(['woowo']);
solution(['yemawooyewu']);
solution(['ayaaya']);
