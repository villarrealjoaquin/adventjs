function decode(message:string) {
  const stack = [];
  let result = '';

  for (let msg of message) {
    if (msg === '(') {
      stack.push(result);
      result = '';
    } else if (msg === ')') {
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      result += msg;
    }
  }

  return result;
}