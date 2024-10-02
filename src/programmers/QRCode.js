function solution(q, r, code) {
  console.log([...code].filter((_, i) => i % q === r).join(''));
}

solution(3, 1, 'qjnwezgrpirldywt');
