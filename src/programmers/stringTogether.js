function solution(strArr) {
  const counter = new Map();

  for (let i = 0; i < strArr.length; i++) {
    const length = strArr[i].length;
    counter.set(length, (counter.get(length) || 0) + 1);
  }

  return Math.max(...counter.values());
}

solution(['a', 'bc', 'd', 'efg', 'hi', 'sd']);
