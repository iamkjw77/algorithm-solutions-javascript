function solution(num_list) {
  const oddAndEven = num_list.reduce(
    ({ odd, even }, curr, i) =>
      i % 2 === 0
        ? { odd, even: (even += curr) }
        : { even, odd: (odd += curr) },
    { odd: 0, even: 0 }
  );

  return Math.max(oddAndEven.odd, oddAndEven.even);
}

solution([4, 2, 6, 1, 7, 6]);
