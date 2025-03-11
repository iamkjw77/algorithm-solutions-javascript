function solution(box, n) {
  const [width, length, height] = box;

  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

solution([1, 1, 1], 1);
solution([10, 8, 6], 3);
