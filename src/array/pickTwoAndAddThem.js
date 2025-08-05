function solution(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push(arr[i] + arr[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // 반환값 : [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // 반환값 : [2, 5, 7, 9, 12]
