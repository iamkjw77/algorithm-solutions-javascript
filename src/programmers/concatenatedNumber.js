function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, curr) => {
      if (curr % 2 === 0) {
        evens.push(curr);
      } else {
        odds.push(curr);
      }

      return { odds, evens };
    },
    { odds: [], evens: [] }
  );

  return Number(odds.join('')) + Number(evens.join(''));
}

solution([3, 4, 5, 2, 1]);
solution([5, 7, 8, 3]);
