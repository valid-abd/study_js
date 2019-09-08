"use strict";
/*jshint esversion: 6 */

let delet = document.querySelector('.adv'); // находим родителя с классом 'adv' 


// console.log(delet);
delet.remove();		 // удаляем его (рекламу )
let ava = document.querySelector('body'); //поиск тега 
// ava.setAttribute('style', 'background-image: url(./image/fon.jpg)'); // добавления атрибута и
ava.style.cssText =`
background-image: url(./image/fon.jpg);
`;	// добавляем или изменяем стили 
// ava.setAttribute('src', '');
let collect = document.querySelectorAll('ul');
let elem = document.querySelectorAll('li');

// изменение порядка глав книг
let itemBooks = document.querySelectorAll('.books');
let chapterBooks = document.querySelectorAll('.book');
itemBooks[0].appendChild(chapterBooks[1]);
itemBooks[0].appendChild(chapterBooks[0]);
itemBooks[0].appendChild(chapterBooks[4]);
itemBooks[0].appendChild(chapterBooks[3]);
itemBooks[0].appendChild(chapterBooks[5]);
itemBooks[0].appendChild(chapterBooks[2]);
// console.log(elem);

let title = document.querySelectorAll('a');
title[2].innerHTML = "Книга 3. this и Прототипы Объектов"; // изменение наименование главы
console.log(elem[18].parentNode);

let liFirst = document.createElement('li');
liFirst.textContent = 'Глава 8: За пределами ES6';
console.log(liFirst); // создали li элемент 
collect[2].append(liFirst);
// console.log(elem.parentNode);


collect[2].appendChild(elem[26]);

collect[0].insertBefore(elem[8], elem[7]);
collect[0].insertBefore(elem[6], elem[4]);
collect[0].insertBefore(elem[8], elem[4]);
collect[0].appendChild(elem[2]);
collect[0].appendChild(elem[10]);

collect[5].insertBefore(elem[55], elem[49]);
collect[5].insertBefore(elem[48], elem[51]);
collect[5].insertBefore(elem[53], elem[51]);
collect[5].insertBefore(elem[52], elem[51]);

// console.log(collect, elem);