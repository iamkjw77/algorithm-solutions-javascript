function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sum1 = arr1.reduce((acc, curr) => acc + curr);
  const sum2 = arr2.reduce((acc, curr) => acc + curr);

  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
}
