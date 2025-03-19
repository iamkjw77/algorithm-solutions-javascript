function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

solution(23); // 5
solution(24); // 6
solution(999); // 201
