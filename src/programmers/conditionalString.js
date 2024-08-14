const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const expression = operations[ineq + eq];
  return Number(expression(n, m));
}

solution('<', '=', 20, 50);
solution('>', '!', 41, 78);
