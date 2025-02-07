function solution(my_string) {
  const set = new Set([...my_string]);

  return [...set].join('');
}

solution('people');
solution('We are the world');
