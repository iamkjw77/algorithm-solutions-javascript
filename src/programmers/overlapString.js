function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

solution('He11oWor1d', 'lloWorl', 2);
solution('Program29b8UYP', 'merS123', 7);
