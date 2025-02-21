function solution(spell, dic) {
  return dic.some((word) => spell.sort().join('') === [...word].sort().join(''))
    ? 1
    : 2;
}

solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']);
solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']);
solution(['s', 'm', 'o', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som']);
