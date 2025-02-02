function solution(my_string) {
  return [...my_string]
    .map((str) =>
      str.charCodeAt() < 97 ? str.toLowerCase() : str.toUpperCase()
    )
    .join('');
}

solution('cccCCC');
