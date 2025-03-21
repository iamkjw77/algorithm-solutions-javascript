function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const answer = emergency.map((num) => sorted.indexOf(num) + 1);

  return answer;
}

solution([3, 76, 24]);
solution([1, 2, 3, 4, 5, 6, 7]);
solution([30, 10, 23, 6, 100]);
