function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common.pop() + (common[1] - common[0]);
  }

  return common.pop() * (common[1] / common[0]);
}

solution([1, 2, 3, 4]);
solution([2, 4, 8]);
