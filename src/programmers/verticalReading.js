function solution(my_string, m, c) {
  let answer = '';

  for (let i = 0; i < my_string.length / m; i++) {
    answer += my_string[c + m * i - 1];
  }

  return answer;
}

solution('ihrhbakrfpndopljhygc', 4, 2);
solution('programmers', 1, 1);
