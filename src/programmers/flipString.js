function solution(my_string, s, e) {
  const arr = [...my_string];
  const reverseSlice = arr.splice(s, e - s + 1).reverse();

  arr.splice(s, 0, ...reverseSlice);

  return arr.join('');
}

solution('Progra21Sremm3', 6, 12);
