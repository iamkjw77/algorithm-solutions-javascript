function solution(arr, k) {
  const set = new Set(arr);

  if (set.size < k) {
    return [...set, ...Array(k - set.size).fill(-1)];
  }

  if (set.size === k) {
    return [...set];
  }

  if (set.size > k) {
    return [...set].slice(0, k);
  }
}

solution([0, 1, 1, 2, 2, 3], 3);
