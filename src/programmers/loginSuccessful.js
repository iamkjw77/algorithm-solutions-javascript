function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

solution(
  ['meosseugi', '1234'],
  [
    ['rardss', '123'],
    ['yyoom', '1234'],
    ['meosseugi', '1234'],
  ]
);

solution(
  ['programmer01', '15789'],
  [
    ['programmer02', '111111'],
    ['programmer00', '134'],
    ['programmer01', '1145'],
  ]
);

solution(
  ['rabbit04', '98761'],
  [
    ['jaja11', '98761'],
    ['krong0313', '29440'],
    ['rabbit00', '111333'],
  ]
);
