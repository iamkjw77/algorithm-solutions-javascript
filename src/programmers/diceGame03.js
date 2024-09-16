function solution(a, b, c, d) {
  const counter = new Map();

  for (const num of [a, b, c, d]) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  const sortedByCnt = [...counter.keys()].sort(
    (a, b) => counter.get(b) - counter.get(a)
  );

  const maxCnt = Math.max(...counter.values());

  const [p, q, r, s] = sortedByCnt;

  if (sortedByCnt.length === 1) {
    return p * 1111;
  }

  if (sortedByCnt.length === 2) {
    return maxCnt === 3 ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
  }

  if (sortedByCnt.length === 3) {
    return q * r;
  }

  return Math.min(p, q, r, s);
}

solution(6, 3, 3, 6);
