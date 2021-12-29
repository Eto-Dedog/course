let num = 266219;
function opNumbers(num) {
  if (!num)
      return 0;
  let result = 1;
  while (num) {
      result *= num % 10;
      num = Math.floor(num / 10);
  }
  return result;
}
console.log(opNumbers(num));
num = opNumbers(num);
console.log(' ');
num **= 3;
console.log(num);
console.log(' ');
console.log(String(num).slice(0,2));