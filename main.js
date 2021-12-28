let arr = [222,353,423,164,753,400,264]

console.log('1)');

arr.forEach(em => {
  if (String(em).search(/(2|4)/) === 0) console.log(em);
})

console.log('');
console.log('2)');

function isPrime(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
  return n > 1;
}

const res = console.log([...Array(101)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n')); 