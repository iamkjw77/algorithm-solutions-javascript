function solution(my_string, queries) {
  const arr = [...my_string];

  queries.forEach(([s, e]) => {
    const reverseSlice = arr.slice(s, e + 1).reverse();
    arr.splice(s, e - s + 1, ...reverseSlice);
  });

  return arr.join('');
}

solution('rermgorpsam', [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
]);
