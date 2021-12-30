////////////////////////////////////////////////////////////////////////////// 00:00-29:14
// console.log(document);
// console.dir(document);
// console.dir(document.childNodes);
// console.dir(document.body);
// const title = document.getElementById('title')
// title.textContent = "DOM!"
// console.dir(title.textContent);
// console.dir(title.style);
// console.dir(title.style.backgroundColor = "green");
// const listItems = document.getElementsByTagName('header')
// const listItems = document.getElementsByTagName('li')
// const links = document.getElementsByClassName('link')
// console.log(listItems);

// const title1 = document.querySelector('#title')
// const title1 = document.querySelector('h1')
// const title1 = document.querySelector('.title')
// const title1 = document.querySelector('[title="Document Object Model"]')
// const title1 = document.querySelector('.link')
// const title1 = document.querySelector('header > ul')
// const list = document.querySelector('header > ul')
// const links2 = document.querySelectorAll('.link')
// const listItems2 = list.querySelectorAll('li')

// console.log(links2);
// console.log(list);
// console.log(listItems2);
// links2.forEach(function(item) {
//   console.log(item);
// })
// links.forEach(function(item) {
//   console.log(item);
// })

////////////////////////////////////////////////////////////////////////////// 29:14-32:52

// const title = document.getElementById('title')
// title.classList.add('green-color')
// title.classList.remove('title')
// title.classList.toggle('title')
// title.classList.toggle('title')
// title.classList.toggle('title')
// console.log(title.classList.contains('title'))
// console.log(title.classList.contains('title1'))
// console.dir(title);

////////////////////////////////////////////////////////////////////////////// 32:52-

const title = document.getElementById('title')

// console.log(title.getAttribute('title'));
// title.setAttribute('title', 'new value title')
// title.setAttribute('id', 'title2')
// console.log(title.getAttribute('title'));
// console.log(title.hasAttribute('title'));
// console.log(title.hasAttribute('title2'));
title.style.backgroundColor = 'green'
// console.log(getComputedStyle(title));
// console.dir(getComputedStyle(title));
// console.dir(getComputedStyle(title).backgroundColor);
console.dir(getComputedStyle(title).fontSize);
// console.dir(title);
console.log(title);
