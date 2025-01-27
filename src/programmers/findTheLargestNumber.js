function solution(array) {
  const answer = [0, 0];

  for (let i = 0; i < array.length; i++) {
    if (answer[0] < array[i]) {
      answer[0] = array[i];
      answer[1] = i;
    }
  }

  return answer;
}

solution([1, 8, 3]);
solution([9, 10, 11, 8]);
