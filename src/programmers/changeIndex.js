function solution(my_string, num1, num2) {
  const arr = [...my_string];
  const temp = arr[num1];

  arr[num1] = arr[num2];
  arr[num2] = temp;

  return arr.join('');
}

solution('hello', 1, 2);
solution('I love you', 3, 6);
