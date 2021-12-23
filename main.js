let title = 'А чё?';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1324;
let rollback = '50';
let fullPrice = 0;
let adaptive = 'true';
let service1;
let service2;
let servicePrice1 = 0;
let servicePrice2 = 0;

let a = prompt('Как называется ваш проект?', '')
title = a;
console.log('Название проекта');
console.log(title);
console.log(' ');
let b = prompt('Какие типы экранов нужно разработать?', '')
screens = b;
console.log('Типы экранов');
console.log(screens); 
console.log(' ');
let c = +prompt('Сколько будет стоить данная работа?', '')
screenPrice  = c;
console.log('Стоимость работы');
console.log(screenPrice); 
console.log(' ');
let d = prompt('Нужен ли адаптив на сайте?', '')
adaptive = d;
console.log('Адаптация');
console.log(adaptive); 
console.log(' ');
let f = prompt('Какой дополнительный тип услуги нужен? #1', '')
service1 = f;
console.log('дополнительный тип услуг #1');
console.log(service1); 
console.log(' ');
let g = +prompt('Какой цена типа услуги? #1', '')
servicePrice1 = g;
console.log('Цена дополнительного типа услуги #1');
console.log(servicePrice1);
console.log(' ');
let h = prompt('Какой дополнительный тип услуги нужен? #2', '')
service2 = h;
console.log('дополнительный тип услуг #2');
console.log(service2); 
console.log(' ');
let j = +prompt('Какой цена типа услуги? #2', '')
servicePrice2 = j;
console.log('Цена дополнительного типа услуги #2');
console.log(servicePrice2);
console.log(' ');
fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log('Итоговая цена');
console.log(fullPrice);

// console.log('1]');
// console.log(title);
// console.log(typeof(title));
// console.log(fullPrice);
// console.log(typeof(fullPrice));
// console.log(adaptive);
// console.log(typeof(adaptive));
// console.log(' ');
// console.log('2] ');
// console.log(screens.length);
// console.log(' ');
// console.log('3] ');
// console.log('Стоимость верстки экранов ' + screenPrice + ' гривен' + ' и ' + 'Стоимость разработки сайта ' + fullPrice + ' гривен');
// console.log(' ');
// console.log('4] ');
// console.log(screens.toLowerCase());
// console.log(screens.split());
// console.log(' ');
// console.log('5] ');
// console.log((fullPrice * (rollback/100)));