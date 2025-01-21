const operator = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
};

function solution(quiz) {
  const answer = [];

  for (let i = 0; i < quiz.length; i++) {
    const [x, operatorStr, y, _, z] = quiz[i].split(' ');

    if (operator[operatorStr](+x, +y) === +z) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }

  return answer;
}

solution(['3 - 4 = -3', '5 + 6 = 11']);
solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2']);
