function solution(myString, pat) {
  return [...myString]
    .map((str) => (str === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0;
}
