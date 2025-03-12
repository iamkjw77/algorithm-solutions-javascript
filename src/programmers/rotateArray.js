function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
}

solution([1, 2, 3], 'right');
solution([4, 455, 6, 4, -1, 45, 6], 'left');
