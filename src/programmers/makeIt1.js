function solution(num_list) {
  const answer = num_list.reduce((acc, curr) => {
    let count = 0;

    while (curr !== 1) {
      if (curr % 2 === 0) curr /= 2;
      else curr = (curr - 1) / 2;
      count++;
    }

    return acc + count;
  }, 0);

  return answer;
}

solution([12, 4, 15, 1, 14]);
