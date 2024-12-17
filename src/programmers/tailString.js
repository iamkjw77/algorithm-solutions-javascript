function solution(str_list, ex) {
  return str_list.reduce(
    (acc, curr) => (curr.includes(ex) ? acc : acc + curr),
    ''
  );
}

solution(['abc', 'bbc', 'cbc'], 'c');
solution(['abc', 'def', 'ghi'], 'ef');
