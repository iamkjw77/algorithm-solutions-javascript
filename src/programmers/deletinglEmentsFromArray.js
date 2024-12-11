function solution(arr, delete_list) {
  for (let i = 0; i < delete_list.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (delete_list[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }

  return arr;
}

solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);
