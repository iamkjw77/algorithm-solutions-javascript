function solution(num_list) {
  const lastEle = num_list[num_list.length - 1];
  const secondToLastEle = num_list[num_list.length - 2];

  return lastEle > secondToLastEle
    ? [...num_list, lastEle - secondToLastEle]
    : [...num_list, lastEle * 2];
}

solution([2, 1, 6]);
solution([5, 2, 1, 7, 5]);
