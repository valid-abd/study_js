// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

"use strict";
/*jshint esversion: 6 */
let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 65250; // моя цель 
let period = 5;
let income = 'Фриланс';

let start = function () {
	do {
		money = prompt('Ваш месячный доход?', 10000);
	}while (isNaN(money) || money.trim() === '' || money === null);
};
start();

let questions1;
let questions01;

let getExpensesMonth = function () {
	let sum = 0, que;
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');
		}
		if (i === 1) {
			questions01 = prompt(' Введите обязательную статью расходов?', ' дорога');
		}
		do {
			que = prompt(' Во сколько это обойдется?', 2500);
		}
		while (isNaN(que) || que.trim() === '' || que === null);
		sum += +que;
	}
	return sum;
};

let exensesAmoun = getExpensesMonth();

console.log(' Расходы на протяжении месяца : ' + exensesAmoun);

let getAccumulatedMonth = function () {
	return money - exensesAmoun;
};

let budgetMonth = getAccumulatedMonth(money, exensesAmoun);
console.log(' чистая прибыль: ' + getAccumulatedMonth());

let budgetDay = getAccumulatedMonth() / 30; // бюджет на месяц 

// let showTypeOf = function (data) {
// 	console.log(data, typeof (data));
// };

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);



function getTargetMonth() {
	let myIncome = Math.ceil(mission / getAccumulatedMonth());
	// let myIncome =  0;
	if (myIncome > 0) {
		console.log(' моя цель будет достигаться ' + myIncome + ' месяц');
	} else {
		console.log(' цель не будет доcтигаться');
	}
};

getTargetMonth();

function getStatusIncome() {
	let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
		(budgetDay >= 300) ? ' Средний уровень дохода ' :
		(budgetDay >= 0) ? 'Низкий уровень дохода' :
		' Что то пошло не так ';
	console.log(cmd);
}
getStatusIncome();

// console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(getTargetMonth()));

// за какой период будет достигнута цель 
// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());
console.log('мои расходы :' + addExpenses.toLowerCase().split(','));
console.log(questions01.toLowerCase().split(','));
