function solution(n) {
  return [...(n + '')].sort((a, b) => b - a).join('') * 1;
}

solution(118372);
