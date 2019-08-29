"use strict";
/*jshint esversion: 6 */
let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'аренда, питание');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 65250; // моя цель 
let period = 5;
let income = 'Фриланс';

let start = function () {
	prompt('Ваш месячный доход?', 10000);
	while (isNaN(money) || money === '' || money === null) {
		money = prompt('Ваш месячный доход?', 10000);
		console.log('money: ', money);
	}
};

start();



let questions1;
let questions01; 

let getExpensesMonth = function () {
	let sum = 0;
	for (let i = 0; i < 2; i++) {
		if (i === 0) {
			questions1 = prompt(' Введите обязательную статью расходов?', ' Коммуналка');
		}

		if (i === 1) {
			questions01 = prompt(' Введите обязательную статью расходов?', ' дорога');
		}
		sum += +prompt(' Во сколько это обойдется?', 2500);
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

console.log(budgetMonth);
let budgetDay = getAccumulatedMonth() / 30; // бюджет на месяц 

let showTypeOf = function (data) {
	console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getStatusIncome() {
	let cmd = (budgetDay >= 800) ? ' Высокий уровень дохода ' :
		(budgetDay >= 300) ? ' Средний уровень дохода ' :
		(budgetDay >= 0) ? 'Низкий уровень дохода' :
		' Что то пошло не так ';
	console.log(cmd);
};
getStatusIncome();

function getTargetMonth() {
	return mission / getAccumulatedMonth();
};
console.log('Моя цель будет достигаться месяцев: ' + Math.ceil(getTargetMonth()));
console.log('Мои обязательные ежемесячные расходы: ' + questions1.toLowerCase().split(','));
// за какой период будет достигнута цель 
// console.log('Моя цель будет достигаться месяцев: ', getTargetMonth());
console.log('мои расходы :' + addExpenses.toLowerCase().split(','));
console.log('Мои обязательные ежемесячные расходы: ' + questions1.toLowerCase().split(','));
