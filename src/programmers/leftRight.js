function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === 'r') return str_list.slice(i + 1);

    if (str_list[i] === 'l') return str_list.slice(0, i);
  }

  return [];
}

solution(['u', 'u', 'l', 'r']);
solution(['r', 'l']);
solution(['i']);
