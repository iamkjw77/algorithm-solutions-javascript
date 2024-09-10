function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0 || arr[i] > stk[stk.length - 1]) {
      stk.push(arr[i]);
      i++;
    }

    if (arr[i] <= stk[stk.length - 1]) {
      stk.pop();
    }
  }

  return stk;
}

solution([1, 4, 2, 5, 3]);
