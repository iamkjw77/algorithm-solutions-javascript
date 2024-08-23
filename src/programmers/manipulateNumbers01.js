function solution(n, control) {
  const operations = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  return [...control].reduce((acc, curr) => acc + operations[curr], n);
}

solution(0, 'wsdawsdassw');
