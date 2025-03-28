function solution(num_list) {
  const answer = [0, 0];

  num_list.forEach((num) => {
    if (num % 2 === 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  });

  return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 5, 7]);
