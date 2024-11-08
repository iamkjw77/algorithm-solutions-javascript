function solution(myString) {
  let answer = '';
  const arr = myString.split('');

  for (let i = 0; i < arr.length; i++) {
    const asciiCode = arr[i].charCodeAt();

    if (asciiCode >= 97) {
      answer += String.fromCharCode(asciiCode - 32);
    } else {
      answer += arr[i];
    }
  }

  return answer;
}

solution('Apple');
