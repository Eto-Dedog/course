const arg = function () {
  str = prompt('Как называется ваш проект?', 'Калькулятор верстки')
  if (typeof str != Number) str+=''
    else {alert('Это не строка!')}
  if (str.length <= 30) return str
  str = str.slice(0, 30) + '...'
  return str
}
console.log(arg().trim());