function solution(myStr) {
  const separateArr = myStr.split(/[a|b|c]/).filter((str) => !!str);

  return separateArr.length === 0 ? ['EMPTY'] : separateArr;
}

solution('baconlettucetomato');
