function solution(arr, flags) {
  return flags.reduce((acc, curr, i) => {
    return curr
      ? [...acc, ...Array(arr[i] * 2).fill(arr[i])]
      : acc.slice(0, -arr[i]);
  }, []);
}

solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
