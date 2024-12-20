function solution(order) {
  return order.reduce(
    (acc, curr) => (curr.includes('latte') ? acc + 5000 : acc + 4500),
    0
  );
}
