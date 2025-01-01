function solution(myString) {
  return [...myString].map((str) => (str > 'l' ? str : 'l')).join('');
}

solution('jjnnllkkmm');
