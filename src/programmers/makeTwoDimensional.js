function solution(num_list, n) {
  const arr = [...num_list];
  const answer = [];

  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(arr.splice(0, n));
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);
