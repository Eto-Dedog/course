let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let serviePercentPrice = fullPrice - (fullPrice * (rollback / 100))
let allServicePrices
const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return "Даем скидку в 10%"
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%"
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена"
  } else {
    return "Что-то пошло не так"
  }
}

console.log(getRollbackMessage(fullPrice));

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(screens.length);
console.log(serviePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " Гривен");

console.log("");
console.log("1)");
const getAllServicePrices = function() {
  let allServicePrices = servicePrice1 + servicePrice2
  return allServicePrices
};
allServicePrices = getAllServicePrices()
console.log(allServicePrices);

console.log("");
console.log("2)");
function getFullPrice(){
  fullPrice = screenPrice + allServicePrices
  return fullPrice
}
fullPrice = getFullPrice()
console.log(fullPrice);

console.log("");
console.log("3)");
function getTitle(){
  title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
  return title
}
title = getTitle()
console.log(title);

console.log("");
console.log("4)");
function getServicePercentPrices(){
  servicePercentPrice  = fullPrice - (fullPrice * (rollback / 100))
  return servicePercentPrice
}
servicePercentPrice = getServicePercentPrices()
console.log(servicePercentPrice);

console.log("");
console.log("5)");
console.log(screens.split());