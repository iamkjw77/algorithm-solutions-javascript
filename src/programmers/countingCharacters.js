function solution(my_string) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  const answer = [];
  answer.length = 52;
  answer.fill(0);

  [...my_string].forEach((str) => {
    answer[alphabets.indexOf(str)] += 1;
  });

  return answer;
}

solution('Programmers');
