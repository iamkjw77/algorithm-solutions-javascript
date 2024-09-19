function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join('');
}

solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]);
