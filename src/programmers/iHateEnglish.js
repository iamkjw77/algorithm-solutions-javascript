const numberString = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(numbers) {
  let answer = numbers;

  for (let i = 0; i < numberString.length; i++) {
    answer = answer.replaceAll(numberString[i], i);
  }

  return +answer;
}

solution('onetwothreefourfivesixseveneightnine');
