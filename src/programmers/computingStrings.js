function solution(my_string) {
  const arr = my_string.split(' ');
  const stack = [];

  let sign = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') sign = 1;
    else if (arr[i] === '-') sign = -1;
    else stack.push(arr[i] * sign);
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}

solution('3 + 4 + 5 - 6');
solution('80 - 70');
