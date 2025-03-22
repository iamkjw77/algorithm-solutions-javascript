const alphabet = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
};

function solution(age) {
  return [...(age + '')].map((num) => alphabet[num]).join('');
}

solution(23);
solution(51);
solution(100);
