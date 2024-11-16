function solution(my_string) {
  return my_string.split(' ').filter((str) => !!str);
}

solution(' i    love  you');
solution('    programmers  ');
