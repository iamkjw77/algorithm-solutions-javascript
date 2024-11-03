function solution(arr, count = 0) {
  const arr2 = arr.map((num, i) => {
    if (num >= 50 && num % 2 === 0) return num / 2;
    if (num < 50 && num % 2 === 1) return num * 2 + 1;
    return num;
  });

  if (JSON.stringify(arr) === JSON.stringify(arr2)) {
    return count;
  } else {
    return solution(arr2, (count += 1));
  }
}

solution([1, 2, 3, 100, 99, 98]);
