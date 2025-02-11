function solution(chicken) {
  if (chicken === 0) return 0;
  return Math.floor((chicken - 1) / 9);
}

solution(0);
solution(100);
solution(1081);
solution(1999);
