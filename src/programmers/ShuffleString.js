function solution(str1, str2) {
  return [...str1].map((string, index) => string + str2[index]).join('');
}

solution('aaaaa', 'bbbbb');
