function solution(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

solution('olleh', 'hello');
solution('allpe', 'apple');
