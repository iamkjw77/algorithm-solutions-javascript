function solution(order) {
  const set = new Set([3, 6, 9]);

  return [...(order + '')].filter((num) => set.has(+num)).length;
}

solution(3);
solution(29423);
